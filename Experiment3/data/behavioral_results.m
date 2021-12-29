% calculate reward
clear all; close all; clc;

addpath(genpath('/Users/tanyawen/Documents/GitHub/Event-Boundary'))
files = dir('/Users/tanyawen/Documents/GitHub/Event-Boundary/Experiment3/data/*.log');
addpath(genpath('/Users/tanyawen/Box/Home Folder tw260/Private/software'));
fig_path = '/Users/tanyawen/Box/Home Folder tw260/Private/temporal perception/manuscript/figures';

nsubj = 60;
bad_subj_list = [];
subj_ind = 1;
for subj = 1:nsubj
    subject_is_good = 1;
    
    % load data from each subject
    data = readtable(files(subj).name,'FileType','text');
    workerId{subj} = data.workerId{1};
    assignmentId{subj} = data.assignmentId{1};
    
    encoding_ind = find(~cellfun(@isempty,regexp(data.encoding,'true')));
    main_encoding_ind = intersect(encoding_ind,find(~cellfun(@isempty,regexp(data.practice,'false'))));
    memory_ind = find(~cellfun(@isempty,regexp(data.memory,'true')));
    main_memory_ind = intersect(memory_ind,find(~cellfun(@isempty,regexp(data.practice,'false'))));
    
    subject_encoding_acc(subj) = mean(~cellfun(@isempty,regexp(data.response_acc(encoding_ind),'true')));
    main_subject_encoding_acc(subj) = mean(~cellfun(@isempty,regexp(data.response_acc(main_encoding_ind),'true')));
    subject_memory_acc(subj) = mean(~cellfun(@isempty,regexp(data.order_acc(memory_ind),'1')));
    main_subject_memory_acc(subj) = mean(~cellfun(@isempty,regexp(data.order_acc(main_memory_ind),'1')));
    
    % check for button mashing
    response_right(subj) = numel(find(~cellfun(@isempty,regexp(data.response(main_encoding_ind),'right')))) / (12*36);
    % mark bad subjects
    if main_subject_encoding_acc(subj) < 0.8 || subject_memory_acc(subj) < 0.5
        bad_subj_list = [bad_subj_list, subj];
        subject_is_good = 0;
    end
    
    
    while subject_is_good

%         sub_age(subj_ind) = str2double(data.age{end});
%         sub_gender{subj_ind} = data.gender{end};

    % indices
    within_boundary_ind = find(~cellfun(@isempty,regexp(data.condition,'within')));
    between_boundary_ind = find(~cellfun(@isempty,regexp(data.condition,'between')));
    context_present_ind = find(~cellfun(@isempty,regexp(data.context_type,'present')));
    context_absent_ind = find(~cellfun(@isempty,regexp(data.context_type,'absent')));
    
    within_present_ind = intersect(within_boundary_ind,context_present_ind);
    within_absent_ind = intersect(within_boundary_ind,context_absent_ind);
    between_present_ind = intersect(between_boundary_ind,context_present_ind);
    between_absent_ind = intersect(between_boundary_ind,context_absent_ind);
        
    %% Obtain encoding accuracy
    encoding_acc = data.response_acc(main_encoding_ind);
    for context = 1:length(main_encoding_ind)/6
        for trial = 1:6
            acc(context,trial) = double(isequal(encoding_acc{6*(context-1)+trial},'true'));
        end
    end
    sub_acc(subj_ind,:) = squeeze(nanmean(acc,1));
    
    %% Obtain encoding reaction times
    encoding_rts = data.response_time(main_encoding_ind);
    for context = 1:length(main_encoding_ind)/6
        for trial = 1:6
            rts(context,trial) = encoding_rts(6*(context-1)+trial);
        end
    end
    rts(rts==0) = NaN;
    sub_rts(subj_ind,:) = squeeze(nanmean(rts,1));
        
    %% Obtain memory results
    encoding_imgages = data.stim(main_encoding_ind);
    left_images = data.left_image(main_memory_ind);
    right_images = data.right_image(main_memory_ind);
    
    % order
    within_present_order_acc(subj_ind) = mean(~cellfun(@isempty,regexp(data.order_acc(within_present_ind),'1')));
    within_absent_order_acc(subj_ind) = mean(~cellfun(@isempty,regexp(data.order_acc(within_absent_ind),'1')));
    between_present_order_acc(subj_ind) = mean(~cellfun(@isempty,regexp(data.order_acc(between_present_ind),'1')));
    between_absent_order_acc(subj_ind) = mean(~cellfun(@isempty,regexp(data.order_acc(between_absent_ind),'1')));
    
    wb_order_acc{subj_ind,1,:} = ~cellfun(@isempty,regexp(data.order_acc(within_boundary_ind),'1'));
    wb_order_acc{subj_ind,2,:} = ~cellfun(@isempty,regexp(data.order_acc(between_boundary_ind),'1'));
    
    % distance
    within_present_distance(subj_ind) = mean(str2double(data.distance_response(within_present_ind))) + 1; % javascript start from 0
    within_absent_distance(subj_ind) = mean(str2double(data.distance_response(within_absent_ind))) + 1;
    between_present_distance(subj_ind) = mean(str2double(data.distance_response(between_present_ind))) + 1;
    between_absent_distance(subj_ind) = mean(str2double(data.distance_response(between_absent_ind))) + 1;

    wb_distance_rating{subj_ind,1,:} = str2double(data.distance_response(within_boundary_ind)) + 1; % javascript start from 0
    wb_distance_rating{subj_ind,2,:} = str2double(data.distance_response(between_boundary_ind)) + 1; % javascript start from 0

    
    subj_ind = subj_ind + 1;
    break
    end
    
end

%% colors
wb_colors = [150, 150, 150; 99, 99, 99] / 255;

%% encoding 

% encoding accuracy
xx = 1:6;

figure(1); hold on
errorbar(1:6,mean(sub_acc),std(sub_acc)/sqrt(subj_ind-1), 'o-','MarkerSize',3,'Color',[189,189,189]/255,'LineWidth',1.5)
xticks(1:6)
ylabel('accuracy (proportion responded)')
xlabel('serial position within event')
ax = gca;
ax.FontSize = 18;
ax.XLim = [0 7];
ax.YLim = [0.80 1];
set(gcf,'color','w');
print(gcf,fullfile(fig_path,'Exp3_encodingACC.eps'),'-depsc2','-painters');

%comparisons_between_bars(xx, sub_acc)

% encoding reaction time

figure; hold on
errorbar(1:6,mean(sub_rts),std(sub_rts)/sqrt(subj_ind-1), 'o-','MarkerSize',3,'Color',[189,189,189]/255,'LineWidth',1.5)
ylabel('reaction time (ms)')
xlabel('serial position within event')
ax = gca;
ax.FontSize = 18;
ax.XLim = [0 7];
ax.YLim = [1000 2000];
set(gcf,'color','w');
print(gcf,fullfile(fig_path,'Exp3_encodingRT.eps'),'-depsc2','-painters');

%comparisons_between_bars(xx, sub_rts)

%% memory

xx = 1:4;

[h,p,ci,stats] = ttest(within_absent_order_acc,between_absent_order_acc)
[h,p,ci,stats] = ttest(within_present_order_acc,between_present_order_acc)
[h,p,ci,stats] = ttest(within_absent_order_acc,within_present_order_acc)
[h,p,ci,stats] = ttest(between_absent_order_acc,between_present_order_acc)
[h,p,ci,stats] = ttest([within_absent_order_acc,between_absent_order_acc],[within_present_order_acc,between_present_order_acc])

[h,p,ci,stats] = ttest(within_absent_distance,between_absent_distance)
[h,p,ci,stats] = ttest(within_present_distance,between_present_distance)
[h,p,ci,stats] = ttest([within_absent_distance,between_absent_distance], [within_present_distance,between_present_distance])
[h,p,ci,stats] = ttest([within_absent_distance,within_present_distance], [between_absent_distance,between_present_distance])

%ANOVA accuracy
anova_acc = [within_absent_order_acc', between_absent_order_acc',...
    within_present_order_acc', between_present_order_acc']; % (absent vs. present) x (within vs. between)
varnames = {'AbsentWithin','absentBetween','PresentWithin','PresentBetween'};
t = table(anova_acc(:,1),anova_acc(:,2),anova_acc(:,3),anova_acc(:,4),...
    'VariableNames',varnames);
within = table(['A','A','P','P']',['W','B','W','B']','VariableNames',{'ContextType', 'BoundaryType'});
rm = fitrm(t,'AbsentWithin, absentBetween, PresentWithin, PresentBetween ~1','WithinDesign', within);
ranovatable_acc = ranova(rm,'WithinModel','ContextType*BoundaryType');


bar_input = [mean(within_absent_order_acc), mean(between_absent_order_acc);
    mean(within_present_order_acc), mean(between_present_order_acc)]';
errorbar_input = [std(within_absent_order_acc)/sqrt(subj_ind-1), std(between_absent_order_acc)/sqrt(subj_ind-1);
    std(within_present_order_acc)/sqrt(subj_ind-1),std(between_present_order_acc)/sqrt(subj_ind-1)]';
[bar_xtick,hb,he] = errorbar_groups(bar_input,errorbar_input, 'bar_colors', wb_colors);
ax = gca;
ax.FontSize = 18;
ylim([0.5,1])
xticklabels({'context absent', 'context present'})
ylabel('temporal order memory (proportion correct)')
set(gcf,'color','w');
% comparisons_between_bars(xx, anova_acc)
legend({'within-event', 'cross-boundary'})
print(gcf,fullfile(fig_path,'Exp3_TemporalOrderCondition.eps'),'-depsc2','-painters');

% hold on
% scatter(repmat(bar_xtick(1), subj_ind-1, 1), within_absent_order_acc,60,'MarkerFaceColor','k','MarkerEdgeColor','k','LineWidth',1,'XJitter','randn','XJitterWidth',.5)
% scatter(repmat(bar_xtick(2), subj_ind-1, 1), between_absent_order_acc,60,'MarkerFaceColor','k','MarkerEdgeColor','k','LineWidth',1,'XJitter','randn','XJitterWidth',.5)
% scatter(repmat(bar_xtick(3), subj_ind-1, 1), within_present_order_acc,60,'MarkerFaceColor','k','MarkerEdgeColor','k','LineWidth',1,'XJitter','randn','XJitterWidth',.5)
% scatter(repmat(bar_xtick(4), subj_ind-1, 1), between_present_order_acc,60,'MarkerFaceColor','k','MarkerEdgeColor','k','LineWidth',1,'XJitter','randn','XJitterWidth',.5)


%ANOVA distance
anova_distance = [within_absent_distance', between_absent_distance',...
    within_present_distance', between_present_distance']; % (absent vs. present) x (within vs. between)
varnames = {'AbsentWithin','absentBetween','PresentWithin','PresentBetween'};
t = table(anova_distance(:,1),anova_distance(:,2),anova_distance(:,3),anova_distance(:,4),...
    'VariableNames',varnames);
within = table(['A','A','P','P']',['W','B','W','B']','VariableNames',{'ContextType', 'BoundaryType'});
rm = fitrm(t,'AbsentWithin, absentBetween, PresentWithin, PresentBetween ~1','WithinDesign', within);
ranovatable_distance = ranova(rm,'WithinModel','ContextType*BoundaryType');


bar_input = [mean(within_absent_distance), mean(between_absent_distance);
    mean(within_present_distance), mean(between_present_distance)]';
errorbar_input = [std(within_absent_distance)/sqrt(subj_ind-1), std(between_absent_distance)/sqrt(subj_ind-1);
    std(within_present_distance)/sqrt(subj_ind-1),std(between_present_distance)/sqrt(subj_ind-1)]';
[bar_xtick,hb,he] = errorbar_groups(bar_input,errorbar_input, 'bar_colors', wb_colors);
ax = gca;
ax.FontSize = 18;
ylim([1,4])
xticklabels({'context absent', 'context present'})
ylabel('temporal distance rating')
set(gcf,'color','w');
% comparisons_between_bars(xx, anova_distance)
legend({'within-event', 'cross-boundary'})
print(gcf,fullfile(fig_path,'Exp3_TemporalDistanceCondition.eps'),'-depsc2','-painters');

% hold on
% scatter(repmat(bar_xtick(1), subj_ind-1, 1), within_absent_distance,60,'MarkerFaceColor','k','MarkerEdgeColor','k','LineWidth',1,'XJitter','randn','XJitterWidth',.5)
% scatter(repmat(bar_xtick(2), subj_ind-1, 1), between_absent_distance,60,'MarkerFaceColor','k','MarkerEdgeColor','k','LineWidth',1,'XJitter','randn','XJitterWidth',.5)
% scatter(repmat(bar_xtick(3), subj_ind-1, 1), within_present_distance,60,'MarkerFaceColor','k','MarkerEdgeColor','k','LineWidth',1,'XJitter','randn','XJitterWidth',.5)
% scatter(repmat(bar_xtick(4), subj_ind-1, 1), between_present_distance,60,'MarkerFaceColor','k','MarkerEdgeColor','k','LineWidth',1,'XJitter','randn','XJitterWidth',.5)





%% temporal distance of: temporal memory (correct vs. incorrect) x  boundary (within vs. between)
for s = 1:(subj_ind-1)

    % within
    within_correct_ind = find(wb_order_acc{s,1,:} == 1);
    within_incorrect_ind = find(wb_order_acc{s,1,:} == 0);
    within_correct_distance(s) = mean(wb_distance_rating{s,1,:}(within_correct_ind));
    within_incorrect_distance(s) = mean(wb_distance_rating{s,1,:}(within_incorrect_ind));
    % between
    between_correct_ind = find(wb_order_acc{s,2,:} == 1);
    between_incorrect_ind = find(wb_order_acc{s,2,:} == 0);
    between_correct_distance(s) = mean(wb_distance_rating{s,2,:}(between_correct_ind));
    between_incorrect_distance(s) = mean(wb_distance_rating{s,2,:}(between_incorrect_ind));

end

[H,P,CI,STATS] = ttest(within_correct_distance, within_incorrect_distance);
[H,P,CI,STATS] = ttest(between_correct_distance, between_incorrect_distance);

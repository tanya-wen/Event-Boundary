% calculate reward
clear all; close all; clc;

addpath(genpath('/Users/tanyawen/Documents/GitHub/Event-Boundary/Experiment1/data'))
files = dir('/Users/tanyawen/Documents/GitHub/Event-Boundary/Experiment1/data/*.log');
fig_path = '/Users/tanyawen/Box/Home Folder tw260/Private/temporal perception/manuscript/figures';

nsubj = numel(files);
bad_subj_list = [];
subj_ind = 1;
for subj = 1:nsubj
    subject_is_good = 1;
    
    % load data from each subject
    data = readtable(files(subj).name,'FileType','text');
    workerId{subj} = data.workerId(1);
    assignmentId{subj} = data.assignmentId{1};
    
    encoding_ind = find(~cellfun(@isempty,regexp(data.encoding,'true')));
    main_encoding_ind = intersect(encoding_ind,find(~cellfun(@isempty,regexp(data.practice,'false'))));
    memory_ind = find(~cellfun(@isempty,regexp(data.memory,'true')));
    main_memory_ind = intersect(memory_ind,find(~cellfun(@isempty,regexp(data.practice,'false'))));
    
    subject_encoding_acc(subj) = mean(~cellfun(@isempty,regexp(data.response_acc(encoding_ind),'true')));
    main_subject_encoding_acc(subj) = mean(~cellfun(@isempty,regexp(data.response_acc(main_encoding_ind),'true')));
    subject_memory_acc(subj) = mean(~cellfun(@isempty,regexp(data.order_acc(memory_ind),'1')));
    main_subject_memory_acc(subj) = mean(~cellfun(@isempty,regexp(data.order_acc(main_memory_ind),'1')));
    
    % mark bad subjects
    if main_subject_encoding_acc(subj) < 0.8 || subject_memory_acc(subj) < 0.5
        bad_subj_list = [bad_subj_list, subj];
        subject_is_good = 0;
    end
    
    
    while subject_is_good                

        sub_age(subj_ind) = str2double(data.age{end});
        sub_gender{subj_ind} = data.gender{end};

    %% Obtain encoding accuracy
    encoding_acc = data.response_acc(main_encoding_ind);
    for context = 1:length(main_encoding_ind)/10
        for trial = 1:10
            acc(context,trial) = double(isequal(encoding_acc{10*(context-1)+trial},'true'));
        end
    end
    sub_acc(subj_ind,:) = squeeze(nanmean(acc,1));
    
    %% Obtain encoding reaction times
    correct_ind = ~cellfun(@isempty,regexp(data.response_acc(main_encoding_ind),'true'));
    encoding_rts = data.response_time(main_encoding_ind);
    encoding_rts(encoding_rts==0) = NaN;
    encoding_rts(isoutlier(encoding_rts,'mean')) = NaN;
    for context = 1:length(main_encoding_ind)/10
        for trial = 1:10
            if correct_ind(10*(context-1)+trial) == 0
                rts(context,trial) = 0;
            else
                rts(context,trial) = encoding_rts(10*(context-1)+trial);
            end
        end
    end
    sub_rts(subj_ind,:) = squeeze(nanmean(rts,1));
        
    %% Obtain memory accuracy results
    encoding_imgages = data.stim(main_encoding_ind);
    left_images = data.left_image(main_memory_ind);
    right_images = data.right_image(main_memory_ind);
    i = 1;
    for block = 1:10
        encoding_imgs = encoding_imgages(30*(block-1)+1: 30*(block-1)+30);
        left_imgs = left_images(27*(block-1)+1: 27*(block-1)+27);
        right_imgs = right_images(27*(block-1)+1: 27*(block-1)+27);
        for trial = 1:27
            left_ind = find(~cellfun(@isempty,regexp(encoding_imgs,left_imgs{trial})));
            right_ind = find(~cellfun(@isempty,regexp(encoding_imgs,right_imgs{trial})));
            if min([left_ind,right_ind])-1 == 0 || min([left_ind,right_ind])-1 == 10 || min([left_ind,right_ind])-1 == 20 % need to -1 because javascript is 0 index
                within_between{main_memory_ind(i)} = '1';
                wb{main_memory_ind(i)} = 'within';
            elseif min([left_ind,right_ind])-1 == 1 || min([left_ind,right_ind])-1 == 11 || min([left_ind,right_ind])-1 == 21 % need to -1 because javascript is 0 index
                within_between{main_memory_ind(i)} = '2';
                wb{main_memory_ind(i)} = 'within';
            elseif min([left_ind,right_ind])-1 == 2 || min([left_ind,right_ind])-1 == 12 || min([left_ind,right_ind])-1 == 22 % need to -1 because javascript is 0 index
                within_between{main_memory_ind(i)} = '3';
                wb{main_memory_ind(i)} = 'within';
            elseif min([left_ind,right_ind])-1 == 3 || min([left_ind,right_ind])-1 == 13 || min([left_ind,right_ind])-1 == 23 % need to -1 because javascript is 0 index
                within_between{main_memory_ind(i)} = '4';
                wb{main_memory_ind(i)} = 'within';
            elseif min([left_ind,right_ind])-1 == 4 || min([left_ind,right_ind])-1 == 14 || min([left_ind,right_ind])-1 == 24 % need to -1 because javascript is 0 index
                within_between{main_memory_ind(i)} = '5';
                wb{main_memory_ind(i)} = 'within';
            elseif min([left_ind,right_ind])-1 == 5 || min([left_ind,right_ind])-1 == 15 || min([left_ind,right_ind])-1 == 25 % need to -1 because javascript is 0 index
                within_between{main_memory_ind(i)} = '6';
                wb{main_memory_ind(i)} = 'within';
            elseif min([left_ind,right_ind])-1 == 6 || min([left_ind,right_ind])-1 == 16 || min([left_ind,right_ind])-1 == 26 % need to -1 because javascript is 0 index
                within_between{main_memory_ind(i)} = '7';
                wb{main_memory_ind(i)} = 'within';
            elseif min([left_ind,right_ind])-1 == 7 || min([left_ind,right_ind])-1 == 17 % need to -1 because javascript is 0 index
                within_between{main_memory_ind(i)} = '8';
                wb{main_memory_ind(i)} = 'between';
            elseif min([left_ind,right_ind])-1 == 8 || min([left_ind,right_ind])-1 == 18 % need to -1 because javascript is 0 index
                within_between{main_memory_ind(i)} = '9';
                wb{main_memory_ind(i)} = 'between';
            elseif min([left_ind,right_ind])-1 == 9 || min([left_ind,right_ind])-1 == 19 % need to -1 because javascript is 0 index
                within_between{main_memory_ind(i)} = '10';
                wb{main_memory_ind(i)} = 'between';
            end
            i = i + 1;
        end
    end
    
    for i = 1:10
        boundary_ind{i} = find(~cellfun(@isempty,regexp(within_between,num2str(i))));
    end
    b_ind{1} = find(~cellfun(@isempty,regexp(wb,'within')));
    b_ind{2} = find(~cellfun(@isempty,regexp(wb,'between')));
    
    % order
    for i = 1:10
        order_acc(subj_ind,i) = mean(~cellfun(@isempty,regexp(data.order_acc(boundary_ind{i}),'1')));
    end
    for b = 1:2
        wb_order_acc{subj_ind,b,:} = ~cellfun(@isempty,regexp(data.order_acc(b_ind{b}),'1'));
    end
    
    % distance
    for i = 1:10
        distance_rating(subj_ind,i) = mean(str2double(data.distance_response(boundary_ind{i}))) + 1; % javascript start from 0
    end
    for b = 1:2
        wb_distance_rating{subj_ind,b,:} = str2double(data.distance_response(b_ind{b})) + 1; % javascript start from 0
    end
    
    %% Obtain memory RT results
    % get rid of outliers
    practice_mem_ind = setdiff(memory_ind,main_memory_ind);
    order_response_time = data.order_response_time;
    order_response_time(practice_mem_ind) = regexprep(order_response_time(practice_mem_ind), '.*', 'NA');
    order_response_time = str2double(order_response_time);
    order_response_time(isoutlier(str2double(data.order_response_time),'mean')) = NaN;
    distance_response_time = data.distance_response_time;
    distance_response_time(practice_mem_ind) = regexprep(distance_response_time(practice_mem_ind), '.*', 'NA');
    distance_response_time = str2double(distance_response_time);
    distance_response_time(isoutlier(str2double(data.order_response_time),'mean')) = NaN;

    % order 
    for i = 1:10
        correct_ind = boundary_ind{i}(~cellfun(@isempty,regexp(data.order_acc(boundary_ind{i}),'1')));
        order_rt(subj_ind,i) = nanmean(order_response_time(correct_ind));
    end
    for b = 1:2
        correct_ind = b_ind{b}(~cellfun(@isempty,regexp(data.order_acc(b_ind{b}),'1')));
        wb_order_rt{subj_ind,b,:} = nanmean(order_response_time(correct_ind));
    end

    % distance
    for i = 1:10
        correct_ind = boundary_ind{i}(~cellfun(@isempty,regexp(data.order_acc(boundary_ind{i}),'1')));
        distance_rt(subj_ind,i) = nanmean(distance_response_time(correct_ind));
    end
    for b = 1:2
        correct_ind = b_ind{b}(~cellfun(@isempty,regexp(data.order_acc(b_ind{b}),'1')));
        wb_distance_rt{subj_ind,b,:} = nanmean(distance_response_time(correct_ind));
    end

    subj_ind = subj_ind + 1;
    break
    end
    
end


%% colors
wb_colors = [254,178,76; 240,59,32] / 255;

% within vs. between average
[H,P,CI,STATS] = ttest(mean(order_acc(:,1:7),2), mean(order_acc(:,8:10),2))
[H,P,CI,STATS] = ttest(mean(distance_rating(:,1:7),2), mean(distance_rating(:,8:10),2))

%% encoding 

% encoding accuracy
xx = 1:10;

figure(1); hold on
errorbar(1:10,mean(sub_acc),std(sub_acc)/sqrt(subj_ind-1), 'o-','MarkerSize',3,'Color',[189,189,189]/255,'LineWidth',1.5)
xticks(1:10)
ylabel('accuracy (proportion correct)')
xlabel('serial position within event')
ax = gca;
ax.FontSize = 18;
ax.XLim = [0 11];
ax.YLim = [0.80 1];
set(gcf,'color','w');
print(gcf,fullfile(fig_path,'Exp1_encodingACC.eps'),'-depsc2','-painters');

%comparisons_between_bars(xx, sub_acc)

% encoding reaction time

figure(2); hold on
errorbar(1:10,mean(sub_rts),std(sub_rts)/sqrt(subj_ind-1), 'o-','MarkerSize',3,'Color',[189,189,189]/255,'LineWidth',1.5)
xticks(1:10)
ylabel('reaction time (ms)')
xlabel('serial position within event')
ax = gca;
ax.FontSize = 18;
ax.XLim = [0 11];
ax.YLim = [1000 2000];
set(gcf,'color','w');
print(gcf,fullfile(fig_path,'Exp1_encodingRT.eps'),'-depsc2','-painters');

%comparisons_between_bars(xx, sub_rts)

%% memory accuracy

% temporal memory over time
figure(3); hold on
errorbar(1:10,mean(order_acc),std(order_acc)/sqrt(subj_ind-1), 'o-','MarkerSize',3,'Color',[189,189,189]/255,'LineWidth',1.5)
xticklabels({'1 vs 4', '2 vs 5', '3 vs 6', '4 vs 7', '5 vs 8', '6 vs 9', '7 vs 10', '8 vs 1', '9 vs 2', '10 vs 3'})
ylabel('temporal order memory (proportion correct)')
xlabel('queried pairs')
ax = gca;
ax.FontSize = 18;
ax.XLim = [0 11];
ax.YLim = [0.5 1];
set(gcf,'color','w');
print(gcf,fullfile(fig_path,'Exp1_TemporalOrderACC.eps'),'-depsc2','-painters');

%comparisons_between_bars(xx, order_acc)

% temporal distance over time
figure(4); hold on
errorbar(1:10,mean(distance_rating),std(distance_rating)/sqrt(subj_ind-1), 'o-','MarkerSize',3,'Color',[189,189,189]/255,'LineWidth',1.5)
xticklabels({'1 vs 4', '2 vs 5', '3 vs 6', '4 vs 7', '5 vs 8', '6 vs 9', '7 vs 10', '8 vs 1', '9 vs 2', '10 vs 3'})
ylabel('temporal distance rating')
xlabel('queried pairs')
ax = gca;
ax.FontSize = 18;
ax.XLim = [0 11];
ax.YLim = [1 4];
set(gcf,'color','w');
print(gcf,fullfile(fig_path,'Exp1_TemporalDistanceRating.eps'),'-depsc2','-painters');

%comparisons_between_bars(xx, distance_rating)


%% memory RT

% temporal memory over time
figure(5); hold on
errorbar(1:10,mean(order_rt),std(order_rt)/sqrt(subj_ind-1), 'o-','MarkerSize',3,'Color',[189,189,189]/255,'LineWidth',1.5)
xticklabels({'1 vs 4', '2 vs 5', '3 vs 6', '4 vs 7', '5 vs 8', '6 vs 9', '7 vs 10', '8 vs 1', '9 vs 2', '10 vs 3'})
ylabel('reaction time (ms)')
xlabel('queried pairs')
ax = gca;
ax.FontSize = 18;
ax.XLim = [0 11];
ax.YLim = [2000 4500];
set(gcf,'color','w');
print(gcf,fullfile(fig_path,'Exp1_TemporalOrderRT.eps'),'-depsc2','-painters');

%comparisons_between_bars(xx, order_rt)

% temporal distance over time
figure(6); hold on
errorbar(1:10,mean(distance_rt),std(distance_rt)/sqrt(subj_ind-1), 'o-','MarkerSize',3,'Color',[189,189,189]/255,'LineWidth',1.5)
xticklabels({'1 vs 4', '2 vs 5', '3 vs 6', '4 vs 7', '5 vs 8', '6 vs 9', '7 vs 10', '8 vs 1', '9 vs 2', '10 vs 3'})
ylabel('reaction time (ms)')
xlabel('queried pairs')
ax = gca;
ax.FontSize = 18;
ax.XLim = [0 11];
ax.YLim = [1000 2500];
set(gcf,'color','w');
print(gcf,fullfile(fig_path,'Exp1_TemporalDistanceRT.eps'),'-depsc2','-painters');

%comparisons_between_bars(xx, distance_rt)

% within vs. between average
[H,P,CI,STATS] = ttest(mean(order_rt(:,1:7),2), mean(order_rt(:,8:10),2))
[H,P,CI,STATS] = ttest(mean(distance_rt(:,1:7),2), mean(distance_rt(:,8:10),2))


% %% temporal distance of: temporal memory (correct vs. incorrect) x  boundary (within vs. between)
% for s = 1:(subj_ind-1)
% 
%     % within
%     within_correct_ind = find(wb_order_acc{s,1,:} == 1);
%     within_incorrect_ind = find(wb_order_acc{s,1,:} == 0);
%     within_correct_distance(s) = mean(wb_distance_rating{s,1,:}(within_correct_ind));
%     within_incorrect_distance(s) = mean(wb_distance_rating{s,1,:}(within_incorrect_ind));
%     % between
%     between_correct_ind = find(wb_order_acc{s,2,:} == 1);
%     between_incorrect_ind = find(wb_order_acc{s,2,:} == 0);
%     between_correct_distance(s) = mean(wb_distance_rating{s,2,:}(between_correct_ind));
%     between_incorrect_distance(s) = mean(wb_distance_rating{s,2,:}(between_incorrect_ind));
% 
% end
% 
% [H,P,CI,STATS] = ttest(within_correct_distance, within_incorrect_distance);
% [H,P,CI,STATS] = ttest(between_correct_distance, between_incorrect_distance);
% 
% % ANOVA distance
% anova_dist = [within_correct_distance', between_correct_distance', ...
%     within_incorrect_distance', between_incorrect_distance'];
% varnames = {'CorrectWithin','CorrectBetween','IncorrectWithin','IncorrectBetween'};
% t = table(anova_dist(:,1),anova_dist(:,2),anova_dist(:,3),anova_dist(:,4),...
%     'VariableNames',varnames);
% within = table(['C','C','I','I']',['W','B','W','B']','VariableNames',{'OrderAccuracy', 'BoundaryType'});
% rm = fitrm(t,'CorrectWithin,CorrectBetween,IncorrectWithin,IncorrectBetween ~1','WithinDesign', within);
% ranovatable_distance = ranova(rm,'WithinModel','OrderAccuracy*BoundaryType');
% 
% bar_input = [nanmean(within_correct_distance), nanmean(between_correct_distance);
%     nanmean(within_incorrect_distance), nanmean(between_incorrect_distance)]';
% errorbar_input = [nanstd(within_correct_distance)/sqrt(subj_ind-1), nanstd(between_correct_distance)/sqrt(subj_ind-1);
%     nanstd(within_incorrect_distance)/sqrt(subj_ind-1),nanstd(between_incorrect_distance)/sqrt(subj_ind-1)]';
% [bar_xtick,hb,he] = errorbar_groups(bar_input,errorbar_input, 'bar_colors', wb_colors);
% ax = gca;
% ax.FontSize = 18;
% ylim([1,4])
% xticklabels({'Correct', 'Incorrect'})
% legend({'within', 'between'})
% ylabel('temporal distance judgement')
% set(gcf,'color','w');
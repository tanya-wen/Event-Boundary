% calculate reward
clear all; close all; clc;
addpath('/Users/tanyawen/Box/Home Folder tw260/Private/software/fdr_bh');

addpath(genpath('/Users/tanyawen/Documents/GitHub/Event-Boundary'))
files = dir('/Users/tanyawen/Documents/GitHub/Event-Boundary/Experiment2/data/*.log');
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
    if main_subject_encoding_acc(subj) < 0.7 || subject_memory_acc(subj) < 0.5
        bad_subj_list = [bad_subj_list, subj];
        subject_is_good = 0;
    end
    
    
    while subject_is_good    

%         sub_age(subj_ind) = str2double(data.age{end});
%         sub_gender{subj_ind} = data.gender{end};
        
    %% Obtain encoding accuracy
    encoding_acc = data.response_acc(main_encoding_ind);
    for context = 1:length(main_encoding_ind)/10
        for trial = 1:10
            acc(context,trial) = double(isequal(encoding_acc{10*(context-1)+trial},'true'));
        end
    end
    sub_acc(subj_ind,:) = squeeze(nanmean(acc,1));
    
    %% Obtain encoding reaction times
    encoding_rts = data.response_time(main_encoding_ind);
    for context = 1:length(main_encoding_ind)/10
        for trial = 1:10
            rts(context,trial) = encoding_rts(10*(context-1)+trial);
        end
    end
    rts(rts==0) = NaN;
    sub_rts(subj_ind,:) = squeeze(nanmean(rts,1));
        
    %% Obtain memory results
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
                wb{main_memory_ind(i)} = 'bsmall';
            elseif min([left_ind,right_ind])-1 == 3 || min([left_ind,right_ind])-1 == 13 || min([left_ind,right_ind])-1 == 23 % need to -1 because javascript is 0 index
                within_between{main_memory_ind(i)} = '4';
                wb{main_memory_ind(i)} = 'bsmall';
            elseif min([left_ind,right_ind])-1 == 4 || min([left_ind,right_ind])-1 == 14 || min([left_ind,right_ind])-1 == 24 % need to -1 because javascript is 0 index
                within_between{main_memory_ind(i)} = '5';
                wb{main_memory_ind(i)} = 'bsmall';
            elseif min([left_ind,right_ind])-1 == 5 || min([left_ind,right_ind])-1 == 15 || min([left_ind,right_ind])-1 == 25 % need to -1 because javascript is 0 index
                within_between{main_memory_ind(i)} = '6';
                wb{main_memory_ind(i)} = 'within';
            elseif min([left_ind,right_ind])-1 == 6 || min([left_ind,right_ind])-1 == 16 || min([left_ind,right_ind])-1 == 26 % need to -1 because javascript is 0 index
                within_between{main_memory_ind(i)} = '7';
                wb{main_memory_ind(i)} = 'within';
            elseif min([left_ind,right_ind])-1 == 7 || min([left_ind,right_ind])-1 == 17 % need to -1 because javascript is 0 index
                within_between{main_memory_ind(i)} = '8';
                wb{main_memory_ind(i)} = 'bbig';
            elseif min([left_ind,right_ind])-1 == 8 || min([left_ind,right_ind])-1 == 18 % need to -1 because javascript is 0 index
                within_between{main_memory_ind(i)} = '9';
                wb{main_memory_ind(i)} = 'bbig';
            elseif min([left_ind,right_ind])-1 == 9 || min([left_ind,right_ind])-1 == 19 % need to -1 because javascript is 0 index
                within_between{main_memory_ind(i)} = '10';
                wb{main_memory_ind(i)} = 'bbig';
            end
            
            first_ind(subj_ind,block,trial) = min([left_ind,right_ind]);
            data_order_acc = data.order_acc(main_memory_ind);
            first_ind_acc(subj_ind,block,trial) = str2double(data_order_acc{27*(block-1)+trial});
            
            i = i + 1;
        end
    end
    
    for i = 1:10
        boundary_ind{i} = find(~cellfun(@isempty,regexp(within_between,num2str(i))));
    end
    b_ind{1} = find(~cellfun(@isempty,regexp(wb,'within')));
    b_ind{2} = find(~cellfun(@isempty,regexp(wb,'bsmall')));
    b_ind{3} = find(~cellfun(@isempty,regexp(wb,'bbig')));

    % order
    for i = 1:10
        order_acc(subj_ind,i) = mean(~cellfun(@isempty,regexp(data.order_acc(boundary_ind{i}),'1')));
    end
    for b = 1:3
        wb_order_acc{subj_ind,b,:} = ~cellfun(@isempty,regexp(data.order_acc(b_ind{b}),'1'));
    end
    
    % distance
    for i = 1:10
        distance_rating(subj_ind,i) = mean(str2double(data.distance_response(boundary_ind{i}))) + 1; % javascript start from 0
    end
    for b = 1:3
        wb_distance_rating{subj_ind,b,:} = str2double(data.distance_response(b_ind{b})) + 1; % javascript start from 0
    end
    
    
    %% compare within, between-small, and between-big memory results
    conds = {'within', 'between-small', 'between-big'};
    for cond = 1:3
        boundary_cond{cond} = find(~cellfun(@isempty,regexp(data.condition,conds{cond}))); 
    end
    
    % order
    for cond = 1:3
        cond_order_acc(subj_ind,cond) = mean(~cellfun(@isempty,regexp(data.order_acc(boundary_cond{cond}),'1')));
    end
    
    % distance
    for cond = 1:3
        cond_distance_rating(subj_ind,cond) = mean(str2double(data.distance_response(boundary_cond{cond}))) + 1; % javascript start from 0
    end
    
    
    subj_ind = subj_ind + 1;
    break
    end
    
end

%% colors
wb_colors = [254,178,76; 240,59,32] / 255;

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
print(gcf,fullfile(fig_path,'Exp2_encodingACC.eps'),'-depsc2','-painters');

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
print(gcf,fullfile(fig_path,'Exp2_encodingRT.eps'),'-depsc2','-painters');

%comparisons_between_bars(xx, sub_rts)

%% over 10 trials
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
print(gcf,fullfile(fig_path,'Exp2_TemporalOrder.eps'),'-depsc2','-painters');

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
print(gcf,fullfile(fig_path,'Exp2_TemporalDistance.eps'),'-depsc2','-painters');

%comparisons_between_bars(xx, distance_rating)

%% by condition
xx = [1,2,3];

% temporal memory over time
figure(5); hold on
bar(mean(cond_order_acc),'FaceColor',[189,189,189]/255); hold on
errorbar(mean(cond_order_acc),std(cond_order_acc)/sqrt(subj_ind-1),'.k')
xticks([1,2,3])
xticklabels({'within', 'small', 'big'})
ylabel('temporal order memory (proportion correct)')
ax = gca;
ax.FontSize = 18;
ax.YLim = [0.5 1];
set(gcf,'color','w');
comparisons_between_bars(xx, cond_order_acc)
print(gcf,fullfile(fig_path,'Exp2_TemporalOrderCondition.eps'),'-depsc2','-painters');


% temporal distance over time
figure(6); hold on
bar(mean(cond_distance_rating),'FaceColor',[189,189,189]/255); hold on
errorbar(mean(cond_distance_rating),std(cond_distance_rating)/sqrt(subj_ind-1),'.k')
xticks([1,2,3])
xticklabels({'within', 'small', 'big'})
ylabel('temporal distance rating')
ax = gca;
ax.FontSize = 18;
ax.YLim = [1 4];
set(gcf,'color','w');
comparisons_between_bars(xx, cond_distance_rating)
print(gcf,fullfile(fig_path,'Exp2_TemporalDistanceCondition.eps'),'-depsc2','-painters');



%% MPVA with features: (start and end) of (run, big block, small block)
run_start = 1:1:30;
run_end = 30:-1:1;
bblock_start = repmat(1:1:10,1,3);
bblock_end = repmat(10:-1:1,1,3);
sblock_start = repmat(1:1:5,1,6);
sblock_end = repmat(5:-1:1,1,6);
wb = [0,0,1,1,1,0,0,2,2,2,0,0,1,1,1,0,0,2,2,2,0,0,1,1,1,0,0,2,2,2];

figure(7);
features = [run_start', run_end', bblock_start', bblock_end', sblock_start', sblock_end', wb'];
d = pdist(features,'correlation');
rdm_mat = squareform(d);
imagesc(rdm_mat)
axis tight equal

for sub = 1:subj_ind-1
    cnt = 1;
    for block = 1:10
        for trial = 1:27
            
            X(cnt,:) = [features(first_ind(sub,block,trial),:), features(first_ind(sub,block,trial)+3,:)];
            y(cnt) = first_ind_acc(sub,block,trial);
            cnt = cnt + 1;
        end
    end
    
    % MVPA
    SVMModel = fitcsvm(X,y,'KernelFunction','linear');
    CVSVMModel = crossval(SVMModel);
    classAcc(sub) = 1 - kfoldLoss(CVSVMModel);
    
%     % multiple regression
%     [b{sub},bint{sub},r{sub},rint{sub},rstats{sub}] = regress(y',[ones(270,1), X(:,1:6)]);
%     [B{sub},dev{sub},lrstats{sub}] = mnrfit([ones(270,1), X(:,1:6)], categorical(y'));
%     
end

[h,p,ci,stats] = ttest(classAcc);
% [h,p,ci,stats] = ttest(r);



%% temporal distance of: temporal memory (correct vs. incorrect) x  boundary (within vs. between)
for s = 1:(subj_ind-1)

    % within
    within_correct_ind = find(wb_order_acc{s,1,:} == 1);
    within_incorrect_ind = find(wb_order_acc{s,1,:} == 0);
    within_correct_distance(s) = mean(wb_distance_rating{s,1,:}(within_correct_ind));
    within_incorrect_distance(s) = mean(wb_distance_rating{s,1,:}(within_incorrect_ind));
    % between-small
    bsmall_correct_ind = find(wb_order_acc{s,2,:} == 1);
    bsmall_incorrect_ind = find(wb_order_acc{s,2,:} == 0);
    bsmall_correct_distance(s) = mean(wb_distance_rating{s,2,:}(bsmall_correct_ind));
    bsmall_incorrect_distance(s) = mean(wb_distance_rating{s,2,:}(bsmall_incorrect_ind));
    % between-small
    bbig_correct_ind = find(wb_order_acc{s,3,:} == 1);
    bbig_incorrect_ind = find(wb_order_acc{s,3,:} == 0);
    bbig_correct_distance(s) = mean(wb_distance_rating{s,2,:}(bbig_correct_ind));
    bbig_incorrect_distance(s) = mean(wb_distance_rating{s,2,:}(bbig_incorrect_ind));

end

[H,P,CI,STATS] = ttest(within_correct_distance, within_incorrect_distance);
[H,P,CI,STATS] = ttest(bsmall_correct_distance, bsmall_incorrect_distance);
[H,P,CI,STATS] = ttest(bbig_correct_distance, bbig_incorrect_distance);

% ANOVA distance
anova_dist = [within_correct_distance', bsmall_correct_distance', bbig_correct_distance',...
    within_incorrect_distance', bsmall_incorrect_distance', bbig_incorrect_distance'];
varnames = {'CorrectWithin','CorrectSmall','CorrectBig','IncorrectWithin','IncorrectSmall','IncorrectBig'};
t = table(anova_dist(:,1),anova_dist(:,2),anova_dist(:,3),anova_dist(:,4),anova_dist(:,5),anova_dist(:,6),...
    'VariableNames',varnames);
within = table(['C','C','C','I','I','I']',['W','B','W','B','W','B']','VariableNames',{'OrderAccuracy', 'BoundaryType'});
rm = fitrm(t,'CorrectWithin,CorrectSmall,CorrectBig,IncorrectWithin,IncorrectSmall,IncorrectBig ~1','WithinDesign', within);
ranovatable_distance = ranova(rm,'WithinModel','OrderAccuracy*BoundaryType');

bar_input = [nanmean(within_correct_distance), nanmean(bsmall_correct_distance), nanmean(bbig_correct_distance);
    nanmean(within_incorrect_distance), nanmean(bsmall_incorrect_distance), nanmean(bbig_incorrect_distance)]';
errorbar_input = [nanstd(within_correct_distance)/sqrt(subj_ind-1), nanstd(bsmall_correct_distance)/sqrt(subj_ind-1), nanstd(bbig_correct_distance)/sqrt(subj_ind-1);
    nanstd(within_incorrect_distance)/sqrt(subj_ind-1), nanstd(bsmall_incorrect_distance)/sqrt(subj_ind-1), nanstd(bbig_incorrect_distance)/sqrt(subj_ind-1)]';
[bar_xtick,hb,he] = errorbar_groups(bar_input,errorbar_input);
ax = gca;
ax.FontSize = 14;
ylim([1,4])
xticklabels({'Correct', 'Incorrect'})
legend({'within', 'between-small', 'between-big'})
ylabel('temporal distance judgement')
set(gcf,'color','w');
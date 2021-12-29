clear all; close all; clc;

%% prepare to load  and store data
addpath(genpath('/Users/tanyawen/Documents/GitHub/Event-Boundary'))
files = dir('/Users/tanyawen/Documents/GitHub/Event-Boundary/Experiment4/data/*.log');
addpath(genpath('/Users/tanyawen/Box/Home Folder tw260/Private/software'));
fig_path = '/Users/tanyawen/Box/Home Folder tw260/Private/temporal perception/manuscript/figures';

nsubj = numel(files);
bad_subj_list = [];
subj_ind = 1;
asso_wb_within1 = cell(nsubj,1);
asso_wb_within2 = cell(nsubj,1);
asso_wb_between1 = cell(nsubj,1);
asso_wb_between2 = cell(nsubj,1);
asso_pos_within1 = cell(nsubj,1);
asso_pos_within2 = cell(nsubj,1);
asso_pos_between1 = cell(nsubj,1);
asso_pos_between2 = cell(nsubj,1);
mem_wb_within = cell(nsubj,1);
mem_wb_between = cell(nsubj,1);
mem_pos_within1 = cell(nsubj,1);
mem_pos_within2 = cell(nsubj,1);
mem_pos_between1 = cell(nsubj,1);
mem_pos_between2 = cell(nsubj,1);

%% loop through subjects and get data
for subj = 1:nsubj
    subject_is_good = 1;

    % load data from each subject
    data = readtable(files(subj).name,'FileType','text');
    workerId{subj} = data.workerId{1};
    assignmentId{subj} = data.assignmentId{1};

    encoding_ind = find(~cellfun(@isempty,regexp(data.encoding,'true')));
    main_encoding_ind = intersect(encoding_ind,find(~cellfun(@isempty,regexp(data.practice,'false'))));
    asso_ind = find(~cellfun(@isempty,regexp(data.association,'true')));
    main_asso_ind = intersect(asso_ind,find(~cellfun(@isempty,regexp(data.practice,'false'))));
    memory_ind = find(~cellfun(@isempty,regexp(data.memory,'true')));
    main_memory_ind = intersect(memory_ind,find(~cellfun(@isempty,regexp(data.practice,'false'))));

    subject_encoding_acc(subj) = mean(~cellfun(@isempty,regexp(data.response_acc(encoding_ind),'true')));
    main_subject_encoding_acc(subj) = mean(~cellfun(@isempty,regexp(data.response_acc(main_encoding_ind),'true')));
    subject_asso_acc(subj) = mean(~cellfun(@isempty,regexp(data.association_acc(asso_ind),'1')));
    main_subject_asso_acc(subj) = mean(~cellfun(@isempty,regexp(data.association_acc(main_asso_ind),'1')));
    main_subject_asso_rt(subj) = mean(str2double(data.association_response_time(main_asso_ind)));
    subject_memory_acc(subj) = mean(~cellfun(@isempty,regexp(data.order_acc(memory_ind),'1')));
    main_subject_memory_acc(subj) = mean(~cellfun(@isempty,regexp(data.order_acc(main_memory_ind),'1')));
    main_subject_memory_rt(subj) = mean(str2double(data.order_response_time(main_memory_ind)));

    % check for button mashing
    response_right(subj) = numel(find(~cellfun(@isempty,regexp(data.response(main_encoding_ind),'right')))) / (12*36);
    % mark bad subjects
    if main_subject_encoding_acc(subj) < 0.8 || main_subject_asso_acc(subj) < 0.5 || subject_memory_acc(subj) < 0.5
        bad_subj_list = [bad_subj_list, subj];
        subject_is_good = 0;
    end


    while subject_is_good

%         sub_age(subj_ind) = str2double(data.age{end});
%         sub_gender{subj_ind} = data.gender{end};
        
        %% obtain subject condition
        context_type{subj_ind} = data.context_type{59};

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

        %% Obtain temporal order memory results
        encoding_images = data.stim(main_encoding_ind);
        left_images = data.left_image(main_memory_ind);
        right_images = data.right_image(main_memory_ind);
        mem_acc = data.order_acc(main_memory_ind);

        i = 1;
        for block = 1:10
            encoding_imgs = encoding_images(36*(block-1)+1: 36*(block-1)+36);
            left_imgs = left_images(11*(block-1)+1: 11*(block-1)+11);
            right_imgs = right_images(11*(block-1)+1: 11*(block-1)+11);
            block_mem_acc = mem_acc(11*(block-1)+1: 11*(block-1)+11);
            for trial = 1:11
                left_ind = find(contains(encoding_imgs, left_imgs{trial}));
                right_ind = find(contains(encoding_imgs, right_imgs{trial}));
                min_ind = min([left_ind,right_ind]);
                max_ind = max([left_ind,right_ind]);
                if left_ind == 2 || left_ind == 8 || left_ind == 14 || left_ind == 20 || left_ind == 26 || left_ind == 32 || ...
                    right_ind == 2 || right_ind == 8 || right_ind == 14 || right_ind == 20 || right_ind == 26 || right_ind == 32
                    mem_wb_within{subj_ind} = [mem_wb_within{subj_ind}, str2double(block_mem_acc{trial})];
                    mem_pos_within1{subj_ind} = [mem_pos_within1{subj_ind}, min_ind];
                    mem_pos_within2{subj_ind} = [mem_pos_within2{subj_ind}, max_ind];
                elseif left_ind == 5 || left_ind == 11 || left_ind == 17 || left_ind == 23 || left_ind == 29 || ...
                    right_ind == 5 || right_ind == 11 || right_ind == 17 || right_ind == 23 || right_ind == 29 
                    mem_wb_between{subj_ind} = [mem_wb_between{subj_ind}, str2double(block_mem_acc{trial})];
                    mem_pos_between1{subj_ind} = [mem_pos_between1{subj_ind}, min_ind];
                    mem_pos_between2{subj_ind} = [mem_pos_between2{subj_ind}, max_ind];
                end
                i = i + 1;
            end
        end

        % indices
        within_boundary_ind = find(~cellfun(@isempty,regexp(data.condition,'within')));
        between_boundary_ind = find(~cellfun(@isempty,regexp(data.condition,'between')));

        % order
        within_order_acc(subj_ind) = mean(~cellfun(@isempty,regexp(data.order_acc(within_boundary_ind),'1')));
        between_order_acc(subj_ind) = mean(~cellfun(@isempty,regexp(data.order_acc(between_boundary_ind),'1')));

        % distance
        within_distance(subj_ind) = mean(str2double(data.distance_response(within_boundary_ind))) + 1; % javascript start from 0
        between_distance(subj_ind) = mean(str2double(data.distance_response(between_boundary_ind))) + 1;


        %% Obtain context memory results
        asso_test = [2, 6, 5, 9, 8, 12, 11, 15, 14, 18, 17, 21, 20, 24, 23, 27, 26, 30, 29, 33, 32, 36]; %javascript 0 index
        asso_images = data.object(main_asso_ind);
        asso_acc = data.association_acc(main_asso_ind);
        for block = 1:10
            encoding_imgs = encoding_images(36*(block-1)+1: 36*(block-1)+36);
            asso_imgs = asso_images(22*(block-1)+1: 22*(block-1)+22);
            block_asso_acc = asso_acc(22*(block-1)+1: 22*(block-1)+22);
            for trial = 1:numel(asso_imgs)
                ind = find(contains(encoding_imgs, asso_imgs{trial}));
                if ind == 2 || ind == 8 || ind == 14 || ind == 20 || ind == 26 || ind == 32
                    asso_wb_within1{subj_ind} = [asso_wb_within1{subj_ind}, str2double(block_asso_acc{trial})];
                    asso_pos_within1{subj_ind} = [asso_pos_within1{subj_ind}, ind];
                elseif ind == 6 || ind == 12 || ind == 18 || ind == 24 || ind == 30 || ind == 36
                    asso_wb_within2{subj_ind} = [asso_wb_within2{subj_ind}, str2double(block_asso_acc{trial})];
                    asso_pos_within2{subj_ind} = [asso_pos_within2{subj_ind}, ind];
                elseif ind == 5 || ind == 11 || ind == 17 || ind == 23 || ind == 29
                    asso_wb_between1{subj_ind} = [asso_wb_between1{subj_ind}, str2double(block_asso_acc{trial})];
                    asso_pos_between1{subj_ind} = [asso_pos_between1{subj_ind}, ind];
                elseif ind == 9 || ind == 15 || ind == 21 || ind == 27 || ind == 33
                    asso_wb_between2{subj_ind} = [asso_wb_between2{subj_ind}, str2double(block_asso_acc{trial})];
                    asso_pos_between2{subj_ind} = [asso_pos_between2{subj_ind}, ind];
                end
            end
        end
        sub_asso_wb_within1(subj_ind) = mean(asso_wb_within1{subj_ind});
        sub_asso_wb_within2(subj_ind) = mean(asso_wb_within2{subj_ind});
        sub_asso_wb_between1(subj_ind) = mean(asso_wb_between1{subj_ind});
        sub_asso_wb_between2(subj_ind) = mean(asso_wb_between2{subj_ind});


        subj_ind = subj_ind + 1;
        break
    end

end

asso_wb_within1(subj_ind:end,:) = [];
asso_wb_within2(subj_ind:end,:) = [];
asso_wb_between1(subj_ind:end,:) = [];
asso_wb_between2(subj_ind:end,:) = [];
asso_pos_within1(subj_ind:end,:) = [];
asso_pos_within2(subj_ind:end,:) = [];
asso_pos_between1(subj_ind:end,:) = [];
asso_pos_between2(subj_ind:end,:) = [];
mem_wb_within(subj_ind:end,:) = [];
mem_wb_between(subj_ind:end,:) = [];
mem_pos_within1(subj_ind:end,:) = [];
mem_pos_within2(subj_ind:end,:) = [];
mem_pos_between1(subj_ind:end,:) = [];
mem_pos_between2(subj_ind:end,:) = [];

present_subs = find(ismember(context_type,'present'));
absent_subs = find(ismember(context_type,'absent'));


%% colors
wb_colors = [150, 150, 150; 99, 99, 99] / 255;

%% encoding

% encoding accuracy
xx = 1:6;

figure(1); hold on
errorbar(1:6,mean(sub_acc(absent_subs,:)),std(sub_acc(absent_subs,:))/sqrt(subj_ind-1), 'o-','MarkerSize',3,'Color',[150, 150, 150]/255,'LineWidth',1.5)
errorbar(1:6,mean(sub_acc(present_subs,:)),std(sub_acc(present_subs,:))/sqrt(subj_ind-1), 'o-','MarkerSize',3,'Color',[99, 99, 99]/255,'LineWidth',1.5)
xticks(1:6)
ylabel('accuracy (proportion responded)')
xlabel('serial position within event')
ax = gca;
ax.FontSize = 18;
ax.XLim = [0 7];
ax.YLim = [0.80 1];
set(gcf,'color','w');
print(gcf,fullfile(fig_path,'Exp4_encodingACC.eps'),'-depsc2','-painters');

anova_acc = [sub_acc(absent_subs,:); sub_acc(present_subs,:)];
group_names = [repmat({'absent'},1,numel(absent_subs)), repmat({'present'},1,numel(present_subs))]';
t = table(group_names,anova_acc(:,1),anova_acc(:,2),anova_acc(:,3),anova_acc(:,4),anova_acc(:,5),anova_acc(:,6),...
    'VariableNames',{'group','a','b','c','d','e','f'});
position = table(['a' 'b','c','d','e','f']','VariableNames',{'position'});
rm = fitrm(t,'a-f~group','WithinDesign', position);
ranovatable = ranova(rm, 'WithinModel','position');

comparisons_between_bars(xx, sub_acc)

% encoding reaction time

figure; hold on
errorbar(1:6,mean(sub_rts(absent_subs,:)),std(sub_rts(absent_subs,:))/sqrt(subj_ind-1), 'o-','MarkerSize',3,'Color',[150, 150, 150]/255,'LineWidth',1.5)
errorbar(1:6,mean(sub_rts(present_subs,:)),std(sub_rts(present_subs,:))/sqrt(subj_ind-1), 'o-','MarkerSize',3,'Color',[99, 99, 99]/255,'LineWidth',1.5)
ylabel('reaction time (ms)')
xlabel('serial position within event')
ax = gca;
ax.FontSize = 18;
ax.XLim = [0 7];
ax.YLim = [1000 2000];
set(gcf,'color','w');
print(gcf,fullfile(fig_path,'Exp4_encodingRT.eps'),'-depsc2','-painters');

anova_rt = [sub_rts(absent_subs,:); sub_rts(present_subs,:)];
group_names = [repmat({'absent'},1,numel(absent_subs)), repmat({'present'},1,numel(present_subs))]';
t = table(group_names,anova_rt(:,1),anova_rt(:,2),anova_rt(:,3),anova_rt(:,4),anova_rt(:,5),anova_rt(:,6),...
    'VariableNames',{'group','a','b','c','d','e','f'});
position = table(['a' 'b','c','d','e','f']','VariableNames',{'position'});
rm = fitrm(t,'a-f~group','WithinDesign', position);
ranovatable = ranova(rm, 'WithinModel','position');

comparisons_between_bars(xx, sub_rts)

%% memory
xx = 1:4;

[h,p,ci,stats] = ttest(within_order_acc(absent_subs),between_order_acc(absent_subs))
[h,p,ci,stats] = ttest(within_order_acc(present_subs),between_order_acc(present_subs))
[h,p,ci,stats] = ttest2(within_order_acc(absent_subs),within_order_acc(present_subs))
[h,p,ci,stats] = ttest2(between_order_acc(absent_subs),between_order_acc(present_subs))

[h,p,ci,stats] = ttest(within_distance(absent_subs),between_distance(absent_subs))
[h,p,ci,stats] = ttest(within_distance(present_subs),between_distance(present_subs))


%ANOVA accuracy
anova_acc = [[within_order_acc(absent_subs)', between_order_acc(absent_subs)']; ...
    [within_order_acc(present_subs)', between_order_acc(present_subs)']];
group_names = [repmat({'absent'},1,numel(absent_subs)), repmat({'present'},1,numel(present_subs))]';
t = table(group_names,anova_acc(:,1),anova_acc(:,2),...
    'VariableNames',{'group','within','between'});
boundary = table(['W' 'B']','VariableNames',{'boundary'});
rm = fitrm(t,'within-between~group','WithinDesign', boundary);
ranovatable = ranova(rm, 'WithinModel','boundary');

[h,p,ci,stats] = ttest2([within_order_acc(absent_subs),between_order_acc(absent_subs)], [within_order_acc(present_subs),between_order_acc(present_subs)])

bar_input = [mean(within_order_acc(absent_subs)), mean(between_order_acc(absent_subs));...
    mean(within_order_acc(present_subs)), mean(between_order_acc(present_subs))]';
errorbar_input = [std(within_order_acc(absent_subs))/sqrt(numel(absent_subs)),std(between_order_acc(absent_subs))/sqrt(numel(absent_subs));...
    std(within_order_acc(present_subs))/sqrt(numel(present_subs)), std(between_order_acc(present_subs))/sqrt(numel(present_subs))]';
[bar_xtick,hb,he] = errorbar_groups(bar_input,errorbar_input, 'bar_colors', wb_colors);
ax = gca;
ax.FontSize = 18;
ylim([0.5,1])
xticklabels({'context absent', 'context present'})
ylabel('temporal order memory (proportion correct)')
set(gcf,'color','w');
legend({'within-event', 'cross-boundary'})
% comparisons_between_bars(xx, [within_order_acc(absent_subs), between_order_acc(absent_subs),...
%     within_order_acc(present_subs), between_order_acc(present_subs)])
print(gcf,fullfile(fig_path,'Exp4_TemporalOrderCondition.eps'),'-depsc2','-painters');

% hold on
% scatter(repmat(bar_xtick(1), numel(absent_subs), 1), within_order_acc(absent_subs),60,'MarkerFaceColor','k','MarkerEdgeColor','k','LineWidth',1,'XJitter','randn','XJitterWidth',.5)
% scatter(repmat(bar_xtick(2), numel(absent_subs), 1), between_order_acc(absent_subs),60,'MarkerFaceColor','k','MarkerEdgeColor','k','LineWidth',1,'XJitter','randn','XJitterWidth',.5)
% scatter(repmat(bar_xtick(3), numel(present_subs), 1), within_order_acc(present_subs),60,'MarkerFaceColor','k','MarkerEdgeColor','k','LineWidth',1,'XJitter','randn','XJitterWidth',.5)
% scatter(repmat(bar_xtick(4), numel(present_subs), 1), between_order_acc(present_subs),60,'MarkerFaceColor','k','MarkerEdgeColor','k','LineWidth',1,'XJitter','randn','XJitterWidth',.5)




%ANOVA distance
anova_dist = [[within_distance(absent_subs)', between_distance(absent_subs)']; ...
    [within_distance(present_subs)', between_distance(present_subs)']];
group_names = [repmat({'absent'},1,numel(absent_subs)), repmat({'present'},1,numel(present_subs))]';
t = table(group_names,anova_dist(:,1),anova_dist(:,2),...
    'VariableNames',{'group','within','between'});
boundary = table(['W' 'B']','VariableNames',{'boundary'});
rm = fitrm(t,'within-between~group','WithinDesign', boundary);
ranovatable = ranova(rm, 'WithinModel','boundary');

[h,p,ci,stats] = ttest2([within_distance(absent_subs),between_distance(absent_subs)], [within_distance(present_subs),between_distance(present_subs)])
[h,p,ci,stats] = ttest(within_distance,between_distance)
[h,p,ci,stats] = ttest2([within_distance(absent_subs)-between_distance(absent_subs)], [within_distance(present_subs)-between_distance(present_subs)])


bar_input = [mean(within_distance(absent_subs)), mean(between_distance(absent_subs));...
    mean(within_distance(present_subs)), mean(between_distance(present_subs))]';
errorbar_input = [std(within_distance(absent_subs))/sqrt(numel(absent_subs)),std(between_distance(absent_subs))/sqrt(numel(absent_subs));...
    std(within_distance(present_subs))/sqrt(numel(present_subs)), std(between_distance(present_subs))/sqrt(numel(present_subs))]';
[bar_xtick,hb,he] = errorbar_groups(bar_input,errorbar_input, 'bar_colors', wb_colors);
ax = gca;
ax.FontSize = 18;
ylim([1,4])
xticklabels({'context absent', 'context present'})
ylabel('temporal distance judgement')
set(gcf,'color','w');
legend({'within-event', 'cross-boundary'})
% comparisons_between_bars(xx, [within_distance(absent_subs), between_distance(absent_subs),...
%     within_distance(present_subs), between_distance(present_subs)])
print(gcf,fullfile(fig_path,'Exp4_TemporalDistanceCondition.eps'),'-depsc2','-painters');

% hold on
% scatter(repmat(bar_xtick(1), numel(absent_subs), 1), within_distance(absent_subs),60,'MarkerFaceColor','k','MarkerEdgeColor','k','LineWidth',1,'XJitter','randn','XJitterWidth',.5)
% scatter(repmat(bar_xtick(2), numel(absent_subs), 1), between_distance(absent_subs),60,'MarkerFaceColor','k','MarkerEdgeColor','k','LineWidth',1,'XJitter','randn','XJitterWidth',.5)
% scatter(repmat(bar_xtick(3), numel(present_subs), 1), within_distance(present_subs),60,'MarkerFaceColor','k','MarkerEdgeColor','k','LineWidth',1,'XJitter','randn','XJitterWidth',.5)
% scatter(repmat(bar_xtick(4), numel(present_subs), 1), between_distance(present_subs),60,'MarkerFaceColor','k','MarkerEdgeColor','k','LineWidth',1,'XJitter','randn','XJitterWidth',.5)



%% association memory
[h,p,ci,stats] = ttest2(sub_asso_wb_within1(present_subs),sub_asso_wb_within1(absent_subs));
[h,p,ci,stats] = ttest2(sub_asso_wb_within2(present_subs),sub_asso_wb_within2(absent_subs));
[h,p,ci,stats] = ttest2(sub_asso_wb_between1(present_subs),sub_asso_wb_between1(absent_subs));
[h,p,ci,stats] = ttest2(sub_asso_wb_between2(present_subs),sub_asso_wb_between2(absent_subs));

sub_asso_wb_within = mean([sub_asso_wb_within1;sub_asso_wb_within2]);
sub_asso_wb_between = mean([sub_asso_wb_between1;sub_asso_wb_between2]);

% correlation model: 
% y: temporal order accuracy
% x: context memory (both items averaged)

% within
for s = 1:(subj_ind-1)
    reg_table_within = [];

    for block = 1:10
        table_ind = (6*(block-1)+1: 6*(block-1)+6);

        df_order = table(mem_wb_within{s}(table_ind)',mem_pos_within1{s}(table_ind)',mem_pos_within2{s}(table_ind)',...
            'VariableNames',{'order_acc', 'first_pos', 'last_pos'});

        df_association_first = table(asso_wb_within1{s}(table_ind)', asso_pos_within1{s}(table_ind)', ...
            'VariableNames',{'first_asso_acc', 'first_pos'});

        df_association_last = table(asso_wb_within2{s}(table_ind)', asso_pos_within2{s}(table_ind)', ...
            'VariableNames',{'last_asso_acc', 'last_pos'});

        temp_table = join(join(df_order,df_association_first),df_association_last);
        reg_table_within = [reg_table_within; temp_table];

    end
    reg_table_within.asso_acc = mean([reg_table_within.first_asso_acc, reg_table_within.last_asso_acc],2);
    corr_asso_order_within(s) = corr(reg_table_within.order_acc, reg_table_within.asso_acc);

    % association memory: remembered niether context, emembered one context, remembered both contexts
    asso_num_within(s,1) = mean(reg_table_within.order_acc(reg_table_within.asso_acc==0));
    asso_num_within(s,2) = mean(reg_table_within.order_acc(reg_table_within.asso_acc==0.5));
    asso_num_within(s,3) = mean(reg_table_within.order_acc(reg_table_within.asso_acc==1));

    % number of trials
    asso_count_within(s,1) = mean(reg_table_within.asso_acc==0);
    asso_count_within(s,2) = mean(reg_table_within.asso_acc==0.5);
    asso_count_within(s,3) = mean(reg_table_within.asso_acc==1);
end

% between
for s = 1:(subj_ind-1)
    reg_table_between = [];

    for block = 1:10
        table_ind = (5*(block-1)+1: 5*(block-1)+5);

        df_order = table(mem_wb_between{s}(table_ind)',mem_pos_between1{s}(table_ind)',mem_pos_between2{s}(table_ind)',...
            'VariableNames',{'order_acc', 'first_pos', 'last_pos'});

        df_association_first = table(asso_wb_between1{s}(table_ind)', asso_pos_between1{s}(table_ind)', ...
            'VariableNames',{'first_asso_acc', 'first_pos'});

        df_association_last = table(asso_wb_between2{s}(table_ind)', asso_pos_between2{s}(table_ind)', ...
            'VariableNames',{'last_asso_acc', 'last_pos'});

        temp_table = join(join(df_order,df_association_first),df_association_last);
        reg_table_between = [reg_table_between; temp_table];

    end
    reg_table_between.asso_acc = mean([reg_table_between.first_asso_acc, reg_table_between.last_asso_acc],2);
    corr_asso_order_between(s) = corr(reg_table_between.order_acc, reg_table_between.asso_acc);

    % association memory: remembered niether context, emembered one context, remembered both contexts
    asso_num_between(s,1) = mean(reg_table_between.order_acc(reg_table_between.asso_acc==0));
    asso_num_between(s,2) = mean(reg_table_between.order_acc(reg_table_between.asso_acc==0.5));
    asso_num_between(s,3) = mean(reg_table_between.order_acc(reg_table_between.asso_acc==1));

    % number of trials
    asso_count_between(s,1) = mean(reg_table_between.asso_acc==0);
    asso_count_between(s,2) = mean(reg_table_between.asso_acc==0.5);
    asso_count_between(s,3) = mean(reg_table_between.asso_acc==1);
    
end


% % ANOVA correlation
% anova_corr = [[corr_asso_order_within(absent_subs)', corr_asso_order_between(absent_subs)']; ...
%     [corr_asso_order_within(present_subs)', corr_asso_order_between(present_subs)']];
% group_names = [repmat({'absent'},1,numel(absent_subs)), repmat({'present'},1,numel(present_subs))]';
% t = table(group_names,anova_corr(:,1),anova_corr(:,2),...
%     'VariableNames',{'group','within','between'});
% boundary = table(['W' 'B']','VariableNames',{'boundary'});
% rm = fitrm(t,'within-between~group','WithinDesign', boundary);
% ranovatable = ranova(rm, 'WithinModel','boundary');
% 
% bar_input = [nanmean(corr_asso_order_within(absent_subs)), nanmean(corr_asso_order_between(absent_subs));...
%     nanmean(corr_asso_order_within(present_subs)), nanmean(corr_asso_order_between(present_subs))]';
% errorbar_input = [nanstd(corr_asso_order_within(absent_subs))/sqrt(numel(absent_subs)),nanstd(corr_asso_order_between(absent_subs))/sqrt(numel(absent_subs));...
%     nanstd(corr_asso_order_within(present_subs))/sqrt(numel(present_subs)), nanstd(corr_asso_order_between(present_subs))/sqrt(numel(present_subs))]';
% [bar_xtick,hb,he] = errorbar_groups(bar_input,errorbar_input, 'bar_colors', wb_colors);
% ylim([-0.5,0.5])
% xticklabels({'context absent', 'context present'})
% ylabel('correlation of association memory with order memory')
% set(gcf,'color','w');

% hold on
% scatter(repmat(bar_xtick(1), numel(absent_subs), 1), corr_asso_order_within(absent_subs),60,'MarkerFaceColor','k','MarkerEdgeColor','k','LineWidth',1,'XJitter','randn','XJitterWidth',.5)
% scatter(repmat(bar_xtick(2), numel(absent_subs), 1), corr_asso_order_between(absent_subs),60,'MarkerFaceColor','k','MarkerEdgeColor','k','LineWidth',1,'XJitter','randn','XJitterWidth',.5)
% scatter(repmat(bar_xtick(3), numel(present_subs), 1), corr_asso_order_within(present_subs),60,'MarkerFaceColor','k','MarkerEdgeColor','k','LineWidth',1,'XJitter','randn','XJitterWidth',.5)
% scatter(repmat(bar_xtick(4), numel(present_subs), 1), corr_asso_order_between(present_subs),60,'MarkerFaceColor','k','MarkerEdgeColor','k','LineWidth',1,'XJitter','randn','XJitterWidth',.5)

%comparisons_between_bars(xx, anova_corr)

% % Plot seperately for association memory: remembered niether context,
% % remembered one context, remembered both contexts
% 
% %within
% bar_input = [[nanmean(asso_num_within(absent_subs,1)), nanmean(asso_num_within(absent_subs,2)), nanmean(asso_num_within(absent_subs,3))];
%     [nanmean(asso_num_within(present_subs,1)), nanmean(asso_num_within(present_subs,2)), nanmean(asso_num_within(present_subs,3))]]; 
% errorbar_input = [[nanstd(asso_num_within(absent_subs,1))/sqrt(numel(absent_subs)), nanstd(asso_num_within(absent_subs,2))/sqrt(numel(absent_subs)), nanstd(asso_num_within(absent_subs,3))/sqrt(numel(absent_subs))];
%     [nanstd(asso_num_within(present_subs,1))/sqrt(numel(present_subs)), nanstd(asso_num_within(present_subs,2))/sqrt(numel(present_subs)), nanstd(asso_num_within(present_subs,3))/sqrt(numel(present_subs))]];
% [bar_xtick,hb,he] = errorbar_groups(bar_input,errorbar_input);
% ylim([0,1])
% xticklabels({'remembered neither', 'remembered one', 'remembered both'})
% ylabel('relationship between association memory and order memory')
% set(gcf,'color','w');
% legend({'context absent', 'context present'})
% 
% anova_num = [[asso_num_within(absent_subs,1), asso_num_within(absent_subs,2), asso_num_within(absent_subs,3)];
%     [asso_num_within(present_subs,1), asso_num_within(present_subs,2), asso_num_within(present_subs,3)]];
% group_names = [repmat({'absent'},1,numel(absent_subs)), repmat({'present'},1,numel(present_subs))]';
% t = table(group_names,anova_num(:,1),anova_num(:,2),anova_num(:,3),...
%     'VariableNames',{'group','N','O','B'});
% number = table(['N', 'O', 'B']','VariableNames',{'number'});
% rm = fitrm(t,'N-B~group','WithinDesign', number);
% ranovatable = ranova(rm, 'WithinModel','number');
% 
% %between
% bar_input = [[nanmean(asso_num_between(absent_subs,1)), nanmean(asso_num_between(absent_subs,2)), nanmean(asso_num_between(absent_subs,3))];
%     [nanmean(asso_num_between(present_subs,1)), nanmean(asso_num_between(present_subs,2)), nanmean(asso_num_between(present_subs,3))]]; 
% errorbar_input = [[nanstd(asso_num_between(absent_subs,1))/sqrt(numel(absent_subs)), nanstd(asso_num_between(absent_subs,2))/sqrt(numel(absent_subs)), nanstd(asso_num_between(absent_subs,3))/sqrt(numel(absent_subs))];
%     [nanstd(asso_num_between(present_subs,1))/sqrt(numel(present_subs)), nanstd(asso_num_between(present_subs,2))/sqrt(numel(present_subs)), nanstd(asso_num_between(present_subs,3))/sqrt(numel(present_subs))]];
% [bar_xtick,hb,he] = errorbar_groups(bar_input,errorbar_input);
% ylim([0,1])
% xticklabels({'remembered neither', 'remembered one', 'remembered both'})
% ylabel('relationship between association memory and order memory')
% set(gcf,'color','w');
% legend({'context absent', 'context present'})
% 
% anova_num = [[asso_num_between(absent_subs,1), asso_num_between(absent_subs,2), asso_num_between(absent_subs,3)];
%     [asso_num_between(present_subs,1), asso_num_between(present_subs,2), asso_num_between(present_subs,3)]];
% group_names = [repmat({'absent'},1,numel(absent_subs)), repmat({'present'},1,numel(present_subs))]';
% t = table(group_names,anova_num(:,1),anova_num(:,2),anova_num(:,3),...
%     'VariableNames',{'group','N','O','B'});
% number = table(['N', 'O', 'B']','VariableNames',{'number'});
% rm = fitrm(t,'N-B~group','WithinDesign', number);
% ranovatable = ranova(rm, 'WithinModel','number');



% group x number x boundary

bar_input = [[nanmean(asso_num_within(absent_subs,1)), nanmean(asso_num_within(absent_subs,2)), nanmean(asso_num_within(absent_subs,3))];
    [nanmean(asso_num_between(absent_subs,1)), nanmean(asso_num_between(absent_subs,2)), nanmean(asso_num_between(absent_subs,3))]];
errorbar_input = [[nanstd(asso_num_within(absent_subs,1))/sqrt(numel(absent_subs)), nanstd(asso_num_within(absent_subs,2))/sqrt(numel(absent_subs)), nanstd(asso_num_within(absent_subs,3))/sqrt(numel(absent_subs))];
    [nanstd(asso_num_between(absent_subs,1))/sqrt(numel(absent_subs)), nanstd(asso_num_between(absent_subs,2))/sqrt(numel(absent_subs)), nanstd(asso_num_between(absent_subs,3))/sqrt(numel(absent_subs))]];
[bar_xtick,hb,he] = errorbar_groups(bar_input,errorbar_input, 'bar_colors', wb_colors);
ax = gca;
ax.FontSize = 18;
ylim([0.5,1])
xticklabels({'neither', 'one', 'both'})
ylabel('temporal order memory (proportion correct)')
set(gcf,'color','w');
legend({'within-event', 'cross-boundary'})
print(gcf,fullfile(fig_path,'Exp4_SourceMemoryAbsent.eps'),'-depsc2','-painters');

bar_input = [[nanmean(asso_num_within(present_subs,1)), nanmean(asso_num_within(present_subs,2)), nanmean(asso_num_within(present_subs,3))];
    [nanmean(asso_num_between(present_subs,1)), nanmean(asso_num_between(present_subs,2)), nanmean(asso_num_between(present_subs,3))]];
errorbar_input = [[nanstd(asso_num_within(present_subs,1))/sqrt(numel(present_subs)), nanstd(asso_num_within(present_subs,2))/sqrt(numel(present_subs)), nanstd(asso_num_within(present_subs,3))/sqrt(numel(present_subs))];
    [nanstd(asso_num_between(present_subs,1))/sqrt(numel(present_subs)), nanstd(asso_num_between(present_subs,2))/sqrt(numel(present_subs)), nanstd(asso_num_between(present_subs,3))/sqrt(numel(present_subs))]];
[bar_xtick,hb,he] = errorbar_groups(bar_input,errorbar_input, 'bar_colors', wb_colors);
ax = gca;
ax.FontSize = 18;
ylim([0.5,1])
xticklabels({'neither', 'one', 'both'})
ylabel('temporal order memory (proportion correct)')
set(gcf,'color','w');
legend({'within-event', 'cross-boundary'})
print(gcf,fullfile(fig_path,'Exp4_SourceMemoryPresent.eps'),'-depsc2','-painters');

anova_num = [[[asso_num_within(present_subs,1), asso_num_within(present_subs,2), asso_num_within(present_subs,3)];
    [asso_num_within(absent_subs,1), asso_num_within(absent_subs,2), asso_num_within(absent_subs,3)]],...
    [[asso_num_between(present_subs,1), asso_num_between(present_subs,2), asso_num_between(present_subs,3)];
    [asso_num_between(absent_subs,1), asso_num_between(absent_subs,2), asso_num_between(absent_subs,3)]]];
group_names = [repmat({'absent'},1,numel(absent_subs)), repmat({'present'},1,numel(present_subs))]';
t = table(group_names,anova_num(:,1),anova_num(:,2),anova_num(:,3),anova_num(:,4),anova_num(:,5),anova_num(:,6),...
    'VariableNames',{'group','B0','B1','B2','W0','W1','W2'});
conditions = table(['0', '1', '2', '0', '1', '2']',['B', 'B', 'B', 'W', 'W', 'W']','VariableNames',{'number','boundary'});
rm = fitrm(t,'B0, B1, B2, W0, W1, W2 ~group','WithinDesign', conditions);
ranovatable = ranova(rm, 'WithinModel','number*boundary');


% 
% [h,p,ci,stats] = ttest([asso_num_within(:,1);asso_num_between(:,1)], [asso_num_within(:,2);asso_num_between(:,2)])
% [h,p,ci,stats] = ttest([asso_num_within(:,1);asso_num_between(:,1)], [asso_num_within(:,3);asso_num_between(:,3)])
% [h,p,ci,stats] = ttest([asso_num_within(:,2);asso_num_between(:,2)], [asso_num_within(:,3);asso_num_between(:,3)])
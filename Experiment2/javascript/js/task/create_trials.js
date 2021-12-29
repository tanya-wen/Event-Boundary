
/* shuffle an array */
function shuffle(array) {
    var tmp, current, top = array.length;
    if (top)
        while (--top) {
            current = Math.floor(Math.random() * (top + 1));
            tmp = array[current];
            array[current] = array[top];
            array[top] = tmp;
        }

    return array;
}


preLoad.addImages(["images/stimuli/m_l_001.jpg", "images/stimuli/m_l_002.jpg", "images/stimuli/m_l_003.jpg", "images/stimuli/m_l_004.jpg", "images/stimuli/m_l_005.jpg", "images/stimuli/m_l_006.jpg", "images/stimuli/m_l_007.jpg", "images/stimuli/m_l_008.jpg", "images/stimuli/m_l_009.jpg", "images/stimuli/m_l_010.jpg", "images/stimuli/m_l_011.jpg", "images/stimuli/m_l_012.jpg", "images/stimuli/m_l_013.jpg", "images/stimuli/m_l_014.jpg", 
"images/stimuli/m_l_015.jpg", "images/stimuli/m_l_016.jpg", "images/stimuli/m_l_017.jpg", "images/stimuli/m_l_018.jpg", "images/stimuli/m_l_019.jpg", "images/stimuli/m_l_020.jpg", "images/stimuli/m_l_021.jpg", "images/stimuli/m_l_022.jpg", "images/stimuli/m_l_023.jpg", "images/stimuli/m_l_024.jpg", "images/stimuli/m_l_025.jpg", "images/stimuli/m_l_026.jpg", "images/stimuli/m_l_027.jpg", "images/stimuli/m_l_028.jpg", 
"images/stimuli/m_s_001.jpg", "images/stimuli/m_s_002.jpg", "images/stimuli/m_s_003.jpg", "images/stimuli/m_s_004.jpg", "images/stimuli/m_s_005.jpg", "images/stimuli/m_s_006.jpg", "images/stimuli/m_s_007.jpg", "images/stimuli/m_s_008.jpg", "images/stimuli/m_s_009.jpg", "images/stimuli/m_s_010.jpg", "images/stimuli/m_s_011.jpg", "images/stimuli/m_s_012.jpg", "images/stimuli/m_s_013.jpg", "images/stimuli/m_s_014.jpg", 
"images/stimuli/m_s_015.jpg", "images/stimuli/m_s_016.jpg", "images/stimuli/m_s_017.jpg", "images/stimuli/m_s_018.jpg", "images/stimuli/m_s_019.jpg", "images/stimuli/m_s_020.jpg", "images/stimuli/m_s_021.jpg", "images/stimuli/m_s_022.jpg", "images/stimuli/m_s_023.jpg", "images/stimuli/m_s_024.jpg", "images/stimuli/m_s_025.jpg", "images/stimuli/m_s_026.jpg", "images/stimuli/m_s_027.jpg", "images/stimuli/m_s_028.jpg", 
"images/stimuli/n_l_001.jpg", "images/stimuli/n_l_002.jpg", "images/stimuli/n_l_003.jpg", "images/stimuli/n_l_004.jpg", "images/stimuli/n_l_005.jpg", "images/stimuli/n_l_006.jpg", "images/stimuli/n_l_007.jpg", "images/stimuli/n_l_008.jpg", "images/stimuli/n_l_009.jpg", "images/stimuli/n_l_010.jpg", "images/stimuli/n_l_011.jpg", "images/stimuli/n_l_012.jpg", "images/stimuli/n_l_013.jpg", "images/stimuli/n_l_014.jpg", 
"images/stimuli/n_l_015.jpg", "images/stimuli/n_l_016.jpg", "images/stimuli/n_l_017.jpg", "images/stimuli/n_l_018.jpg", "images/stimuli/n_l_019.jpg", "images/stimuli/n_l_020.jpg", "images/stimuli/n_l_021.jpg", "images/stimuli/n_l_022.jpg", "images/stimuli/n_l_023.jpg", "images/stimuli/n_l_024.jpg", "images/stimuli/n_l_025.jpg", "images/stimuli/n_l_026.jpg", "images/stimuli/n_l_027.jpg", "images/stimuli/n_l_028.jpg", 
"images/stimuli/n_s_001.jpg", "images/stimuli/n_s_002.jpg", "images/stimuli/n_s_003.jpg", "images/stimuli/n_s_004.jpg", "images/stimuli/n_s_005.jpg", "images/stimuli/n_s_006.jpg", "images/stimuli/n_s_007.jpg", "images/stimuli/n_s_008.jpg", "images/stimuli/n_s_009.jpg", "images/stimuli/n_s_010.jpg", "images/stimuli/n_s_011.jpg", "images/stimuli/n_s_012.jpg", "images/stimuli/n_s_013.jpg", "images/stimuli/n_s_014.jpg", 
"images/stimuli/n_s_015.jpg", "images/stimuli/n_s_016.jpg", "images/stimuli/n_s_017.jpg", "images/stimuli/n_s_018.jpg", "images/stimuli/n_s_019.jpg", "images/stimuli/n_s_020.jpg", "images/stimuli/n_s_021.jpg", "images/stimuli/n_s_022.jpg", "images/stimuli/n_s_023.jpg", "images/stimuli/n_s_024.jpg", "images/stimuli/n_s_025.jpg", "images/stimuli/n_s_026.jpg", "images/stimuli/n_s_027.jpg", "images/stimuli/n_s_028.jpg", 
"images/stimuli/a_1_001.jpg", "images/stimuli/a_1_002.jpg", "images/stimuli/a_1_003.jpg", "images/stimuli/a_1_004.jpg", "images/stimuli/a_1_005.jpg", "images/stimuli/a_1_006.jpg", "images/stimuli/a_1_007.jpg", "images/stimuli/a_1_008.jpg", "images/stimuli/a_1_009.jpg", "images/stimuli/a_1_010.jpg", "images/stimuli/a_1_011.jpg", "images/stimuli/a_1_012.jpg", "images/stimuli/a_1_013.jpg", "images/stimuli/a_1_014.jpg", 
"images/stimuli/a_1_015.jpg", "images/stimuli/a_1_016.jpg", "images/stimuli/a_1_017.jpg", "images/stimuli/a_1_018.jpg", "images/stimuli/a_1_019.jpg", "images/stimuli/a_1_020.jpg", "images/stimuli/a_1_021.jpg", "images/stimuli/a_1_022.jpg", "images/stimuli/a_1_023.jpg", "images/stimuli/a_1_024.jpg", "images/stimuli/a_1_025.jpg", "images/stimuli/a_1_026.jpg", "images/stimuli/a_1_027.jpg", "images/stimuli/a_1_028.jpg", 
"images/stimuli/a_2_001.jpg", "images/stimuli/a_2_002.jpg", "images/stimuli/a_2_003.jpg", "images/stimuli/a_2_004.jpg", "images/stimuli/a_2_005.jpg", "images/stimuli/a_2_006.jpg", "images/stimuli/a_2_007.jpg", "images/stimuli/a_2_008.jpg", "images/stimuli/a_2_009.jpg", "images/stimuli/a_2_010.jpg", "images/stimuli/a_2_011.jpg", "images/stimuli/a_2_012.jpg", "images/stimuli/a_2_013.jpg", "images/stimuli/a_2_014.jpg", 
"images/stimuli/a_2_015.jpg", "images/stimuli/a_2_016.jpg", "images/stimuli/a_2_017.jpg", "images/stimuli/a_2_018.jpg", "images/stimuli/a_2_019.jpg", "images/stimuli/a_2_020.jpg", "images/stimuli/a_2_021.jpg", "images/stimuli/a_2_022.jpg", "images/stimuli/a_2_023.jpg", "images/stimuli/a_2_024.jpg", "images/stimuli/a_2_025.jpg", "images/stimuli/a_2_026.jpg", "images/stimuli/a_2_027.jpg", "images/stimuli/a_2_028.jpg", 
"images/stimuli/c_1_001.jpg", "images/stimuli/c_1_002.jpg", "images/stimuli/c_1_003.jpg", "images/stimuli/c_1_004.jpg", "images/stimuli/c_1_005.jpg", "images/stimuli/c_1_006.jpg", "images/stimuli/c_1_007.jpg", "images/stimuli/c_1_008.jpg", "images/stimuli/c_1_009.jpg", "images/stimuli/c_1_010.jpg", "images/stimuli/c_1_011.jpg", "images/stimuli/c_1_012.jpg", "images/stimuli/c_1_013.jpg", "images/stimuli/c_1_014.jpg", 
"images/stimuli/c_1_015.jpg", "images/stimuli/c_1_016.jpg", "images/stimuli/c_1_017.jpg", "images/stimuli/c_1_018.jpg", "images/stimuli/c_1_019.jpg", "images/stimuli/c_1_020.jpg", "images/stimuli/c_1_021.jpg", "images/stimuli/c_1_022.jpg", "images/stimuli/c_1_023.jpg", "images/stimuli/c_1_024.jpg", "images/stimuli/c_1_025.jpg", "images/stimuli/c_1_026.jpg", "images/stimuli/c_1_027.jpg", "images/stimuli/c_1_028.jpg", 
"images/stimuli/c_2_001.jpg", "images/stimuli/c_2_002.jpg", "images/stimuli/c_2_003.jpg", "images/stimuli/c_2_004.jpg", "images/stimuli/c_2_005.jpg", "images/stimuli/c_2_006.jpg", "images/stimuli/c_2_007.jpg", "images/stimuli/c_2_008.jpg", "images/stimuli/c_2_009.jpg", "images/stimuli/c_2_010.jpg", "images/stimuli/c_2_011.jpg", "images/stimuli/c_2_012.jpg", "images/stimuli/c_2_013.jpg", "images/stimuli/c_2_014.jpg", 
"images/stimuli/c_2_015.jpg", "images/stimuli/c_2_016.jpg", "images/stimuli/c_2_017.jpg", "images/stimuli/c_2_018.jpg", "images/stimuli/c_2_019.jpg", "images/stimuli/c_2_020.jpg", "images/stimuli/c_2_021.jpg", "images/stimuli/c_2_022.jpg", "images/stimuli/c_2_023.jpg", "images/stimuli/c_2_024.jpg", "images/stimuli/c_2_025.jpg", "images/stimuli/c_2_026.jpg", "images/stimuli/c_2_027.jpg", "images/stimuli/c_2_028.jpg", 
"images/stimuli/i_c_001.jpg", "images/stimuli/i_c_002.jpg", "images/stimuli/i_c_003.jpg", "images/stimuli/i_c_004.jpg", "images/stimuli/i_c_005.jpg", "images/stimuli/i_c_006.jpg", "images/stimuli/i_c_007.jpg", "images/stimuli/i_c_008.jpg", "images/stimuli/i_c_009.jpg", "images/stimuli/i_c_010.jpg", "images/stimuli/i_c_011.jpg", "images/stimuli/i_c_012.jpg", "images/stimuli/i_c_013.jpg", "images/stimuli/i_c_014.jpg", 
"images/stimuli/i_c_015.jpg", "images/stimuli/i_c_016.jpg", "images/stimuli/i_c_017.jpg", "images/stimuli/i_c_018.jpg", "images/stimuli/i_c_019.jpg", "images/stimuli/i_c_020.jpg", "images/stimuli/i_c_021.jpg", "images/stimuli/i_c_022.jpg", "images/stimuli/i_c_023.jpg", "images/stimuli/i_c_024.jpg", "images/stimuli/i_c_025.jpg", "images/stimuli/i_c_026.jpg", "images/stimuli/i_c_027.jpg", "images/stimuli/i_c_028.jpg", 
"images/stimuli/i_s_001.jpg", "images/stimuli/i_s_002.jpg", "images/stimuli/i_s_003.jpg", "images/stimuli/i_s_004.jpg", "images/stimuli/i_s_005.jpg", "images/stimuli/i_s_006.jpg", "images/stimuli/i_s_007.jpg", "images/stimuli/i_s_008.jpg", "images/stimuli/i_s_009.jpg", "images/stimuli/i_s_010.jpg", "images/stimuli/i_s_011.jpg", "images/stimuli/i_s_012.jpg", "images/stimuli/i_s_013.jpg", "images/stimuli/i_s_014.jpg", 
"images/stimuli/i_s_015.jpg", "images/stimuli/i_s_016.jpg", "images/stimuli/i_s_017.jpg", "images/stimuli/i_s_018.jpg", "images/stimuli/i_s_019.jpg", "images/stimuli/i_s_020.jpg", "images/stimuli/i_s_021.jpg", "images/stimuli/i_s_022.jpg", "images/stimuli/i_s_023.jpg", "images/stimuli/i_s_024.jpg", "images/stimuli/i_s_025.jpg", "images/stimuli/i_s_026.jpg", "images/stimuli/i_s_027.jpg", "images/stimuli/i_s_028.jpg", 
"images/stimuli/o_c_001.jpg", "images/stimuli/o_c_002.jpg", "images/stimuli/o_c_003.jpg", "images/stimuli/o_c_004.jpg", "images/stimuli/o_c_005.jpg", "images/stimuli/o_c_006.jpg", "images/stimuli/o_c_007.jpg", "images/stimuli/o_c_008.jpg", "images/stimuli/o_c_009.jpg", "images/stimuli/o_c_010.jpg", "images/stimuli/o_c_011.jpg", "images/stimuli/o_c_012.jpg", "images/stimuli/o_c_013.jpg", "images/stimuli/o_c_014.jpg", 
"images/stimuli/o_c_015.jpg", "images/stimuli/o_c_016.jpg", "images/stimuli/o_c_017.jpg", "images/stimuli/o_c_018.jpg", "images/stimuli/o_c_019.jpg", "images/stimuli/o_c_020.jpg", "images/stimuli/o_c_021.jpg", "images/stimuli/o_c_022.jpg", "images/stimuli/o_c_023.jpg", "images/stimuli/o_c_024.jpg", "images/stimuli/o_c_025.jpg", "images/stimuli/o_c_026.jpg", "images/stimuli/o_c_027.jpg", "images/stimuli/o_c_028.jpg", 
"images/stimuli/o_s_001.jpg", "images/stimuli/o_s_002.jpg", "images/stimuli/o_s_003.jpg", "images/stimuli/o_s_004.jpg", "images/stimuli/o_s_005.jpg", "images/stimuli/o_s_006.jpg", "images/stimuli/o_s_007.jpg", "images/stimuli/o_s_008.jpg", "images/stimuli/o_s_009.jpg", "images/stimuli/o_s_010.jpg", "images/stimuli/o_s_011.jpg", "images/stimuli/o_s_012.jpg", "images/stimuli/o_s_013.jpg", "images/stimuli/o_s_014.jpg", 
"images/stimuli/o_s_015.jpg", "images/stimuli/o_s_016.jpg", "images/stimuli/o_s_017.jpg", "images/stimuli/o_s_018.jpg", "images/stimuli/o_s_019.jpg", "images/stimuli/o_s_020.jpg", "images/stimuli/o_s_021.jpg", "images/stimuli/o_s_022.jpg", "images/stimuli/o_s_023.jpg", "images/stimuli/o_s_024.jpg", "images/stimuli/o_s_025.jpg", "images/stimuli/o_s_026.jpg", "images/stimuli/o_s_027.jpg", "images/stimuli/o_s_028.jpg", 
])


let stim_list_objects = shuffle(["m_l_001.jpg", "m_l_002.jpg", "m_l_003.jpg", "m_l_004.jpg", "m_l_005.jpg", "m_l_006.jpg", "m_l_007.jpg", "m_l_008.jpg", "m_l_009.jpg", "m_l_010.jpg", "m_l_011.jpg", "m_l_012.jpg", "m_l_013.jpg", "m_l_014.jpg", "m_l_015.jpg", "m_l_016.jpg", "m_l_017.jpg", "m_l_018.jpg", "m_l_019.jpg", "m_l_020.jpg", "m_l_021.jpg", "m_l_022.jpg", "m_l_023.jpg", "m_l_024.jpg", "m_l_025.jpg", "m_l_026.jpg", "m_l_027.jpg", "m_l_028.jpg", "m_s_001.jpg", "m_s_002.jpg", "m_s_003.jpg", "m_s_004.jpg", "m_s_005.jpg", "m_s_006.jpg", "m_s_007.jpg", "m_s_008.jpg", "m_s_009.jpg", "m_s_010.jpg", "m_s_011.jpg", "m_s_012.jpg", "m_s_013.jpg", "m_s_014.jpg", "m_s_015.jpg", "m_s_016.jpg", "m_s_017.jpg", "m_s_018.jpg", "m_s_019.jpg", "m_s_020.jpg", "m_s_021.jpg", "m_s_022.jpg", "m_s_023.jpg", "m_s_024.jpg", "m_s_025.jpg", "m_s_026.jpg", "m_s_027.jpg", "m_s_028.jpg", "n_l_001.jpg", "n_l_002.jpg", "n_l_003.jpg", "n_l_004.jpg", "n_l_005.jpg", "n_l_006.jpg", "n_l_007.jpg", "n_l_008.jpg", "n_l_009.jpg", "n_l_010.jpg", "n_l_011.jpg", "n_l_012.jpg", "n_l_013.jpg", "n_l_014.jpg", "n_l_015.jpg", "n_l_016.jpg", "n_l_017.jpg", "n_l_018.jpg", "n_l_019.jpg", "n_l_020.jpg", "n_l_021.jpg", "n_l_022.jpg", "n_l_023.jpg", "n_l_024.jpg", "n_l_025.jpg", "n_l_026.jpg", "n_l_027.jpg", "n_l_028.jpg", "n_s_001.jpg", "n_s_002.jpg", "n_s_003.jpg", "n_s_004.jpg", "n_s_005.jpg", "n_s_006.jpg", "n_s_007.jpg", "n_s_008.jpg", "n_s_009.jpg", "n_s_010.jpg", "n_s_011.jpg", "n_s_012.jpg", "n_s_013.jpg", "n_s_014.jpg", "n_s_015.jpg", "n_s_016.jpg", "n_s_017.jpg", "n_s_018.jpg", "n_s_019.jpg", "n_s_020.jpg", "n_s_021.jpg", "n_s_022.jpg", "n_s_023.jpg", "n_s_024.jpg", "n_s_025.jpg", "n_s_026.jpg", "n_s_027.jpg", "n_s_028.jpg"])
let stim_list_words = shuffle(["a_1_001.jpg", "a_1_002.jpg", "a_1_003.jpg", "a_1_004.jpg", "a_1_005.jpg", "a_1_006.jpg", "a_1_007.jpg", "a_1_008.jpg", "a_1_009.jpg", "a_1_010.jpg", "a_1_011.jpg", "a_1_012.jpg", "a_1_013.jpg", "a_1_014.jpg", "a_1_015.jpg", "a_1_016.jpg", "a_1_017.jpg", "a_1_018.jpg", "a_1_019.jpg", "a_1_020.jpg", "a_1_021.jpg", "a_1_022.jpg", "a_1_023.jpg", "a_1_024.jpg", "a_1_025.jpg", "a_1_026.jpg", "a_1_027.jpg", "a_1_028.jpg", "a_2_001.jpg", "a_2_002.jpg", "a_2_003.jpg", "a_2_004.jpg", "a_2_005.jpg", "a_2_006.jpg", "a_2_007.jpg", "a_2_008.jpg", "a_2_009.jpg", "a_2_010.jpg", "a_2_011.jpg", "a_2_012.jpg", "a_2_013.jpg", "a_2_014.jpg", "a_2_015.jpg", "a_2_016.jpg", "a_2_017.jpg", "a_2_018.jpg", "a_2_019.jpg", "a_2_020.jpg", "a_2_021.jpg", "a_2_022.jpg", "a_2_023.jpg", "a_2_024.jpg", "a_2_025.jpg", "a_2_026.jpg", "a_2_027.jpg", "a_2_028.jpg", "c_1_001.jpg", "c_1_002.jpg", "c_1_003.jpg", "c_1_004.jpg", "c_1_005.jpg", "c_1_006.jpg", "c_1_007.jpg", "c_1_008.jpg", "c_1_009.jpg", "c_1_010.jpg", "c_1_011.jpg", "c_1_012.jpg", "c_1_013.jpg", "c_1_014.jpg", "c_1_015.jpg", "c_1_016.jpg", "c_1_017.jpg", "c_1_018.jpg", "c_1_019.jpg", "c_1_020.jpg", "c_1_021.jpg", "c_1_022.jpg", "c_1_023.jpg", "c_1_024.jpg", "c_1_025.jpg", "c_1_026.jpg", "c_1_027.jpg", "c_1_028.jpg", "c_2_001.jpg", "c_2_002.jpg", "c_2_003.jpg", "c_2_004.jpg", "c_2_005.jpg", "c_2_006.jpg", "c_2_007.jpg", "c_2_008.jpg", "c_2_009.jpg", "c_2_010.jpg", "c_2_011.jpg", "c_2_012.jpg", "c_2_013.jpg", "c_2_014.jpg", "c_2_015.jpg", "c_2_016.jpg", "c_2_017.jpg", "c_2_018.jpg", "c_2_019.jpg", "c_2_020.jpg", "c_2_021.jpg", "c_2_022.jpg", "c_2_023.jpg", "c_2_024.jpg", "c_2_025.jpg", "c_2_026.jpg", "c_2_027.jpg", "c_2_028.jpg"])
let stim_list_scenes = shuffle(["i_c_001.jpg", "i_c_002.jpg", "i_c_003.jpg", "i_c_004.jpg", "i_c_005.jpg", "i_c_006.jpg", "i_c_007.jpg", "i_c_008.jpg", "i_c_009.jpg", "i_c_010.jpg", "i_c_011.jpg", "i_c_012.jpg", "i_c_013.jpg", "i_c_014.jpg", "i_c_015.jpg", "i_c_016.jpg", "i_c_017.jpg", "i_c_018.jpg", "i_c_019.jpg", "i_c_020.jpg", "i_c_021.jpg", "i_c_022.jpg", "i_c_023.jpg", "i_c_024.jpg", "i_c_025.jpg", "i_c_026.jpg", "i_c_027.jpg", "i_c_028.jpg", "i_s_001.jpg", "i_s_002.jpg", "i_s_003.jpg", "i_s_004.jpg", "i_s_005.jpg", "i_s_006.jpg", "i_s_007.jpg", "i_s_008.jpg", "i_s_009.jpg", "i_s_010.jpg", "i_s_011.jpg", "i_s_012.jpg", "i_s_013.jpg", "i_s_014.jpg", "i_s_015.jpg", "i_s_016.jpg", "i_s_017.jpg", "i_s_018.jpg", "i_s_019.jpg", "i_s_020.jpg", "i_s_021.jpg", "i_s_022.jpg", "i_s_023.jpg", "i_s_024.jpg", "i_s_025.jpg", "i_s_026.jpg", "i_s_027.jpg", "i_s_028.jpg", "o_c_001.jpg", "o_c_002.jpg", "o_c_003.jpg", "o_c_004.jpg", "o_c_005.jpg", "o_c_006.jpg", "o_c_007.jpg", "o_c_008.jpg", "o_c_009.jpg", "o_c_010.jpg", "o_c_011.jpg", "o_c_012.jpg", "o_c_013.jpg", "o_c_014.jpg", "o_c_015.jpg", "o_c_016.jpg", "o_c_017.jpg", "o_c_018.jpg", "o_c_019.jpg", "o_c_020.jpg", "o_c_021.jpg", "o_c_022.jpg", "o_c_023.jpg", "o_c_024.jpg", "o_c_025.jpg", "o_c_026.jpg", "o_c_027.jpg", "o_c_028.jpg", "o_s_001.jpg", "o_s_002.jpg", "o_s_003.jpg", "o_s_004.jpg", "o_s_005.jpg", "o_s_006.jpg", "o_s_007.jpg", "o_s_008.jpg", "o_s_009.jpg", "o_s_010.jpg", "o_s_011.jpg", "o_s_012.jpg", "o_s_013.jpg", "o_s_014.jpg", "o_s_015.jpg", "o_s_016.jpg", "o_s_017.jpg", "o_s_018.jpg", "o_s_019.jpg", "o_s_020.jpg", "o_s_021.jpg", "o_s_022.jpg", "o_s_023.jpg", "o_s_024.jpg", "o_s_025.jpg", "o_s_026.jpg", "o_s_027.jpg", "o_s_028.jpg"])


/* encoding trials */
// function that randomizes the order of event types for encoding phase
function make_event_order() {

    let big_event_order = shuffle(['object', 'word', 'scene'])
    let object_events = ['origin', 'size']
    let word_events = ['abstractness', 'syllable']
    let scene_events = ['location', 'building']

    let event_order = []
    for (let i = 0; i < big_event_order.length; i++) {
        if (big_event_order[i] == 'object') {
            let object_order = shuffle(object_events)
            event_order.push(...Array(5).fill(object_order[0]))
            event_order.push(...Array(5).fill(object_order[1]))
        } else if (big_event_order[i] == 'word') {
            let word_order = shuffle(word_events)
            event_order.push(...Array(5).fill(word_order[0]))
            event_order.push(...Array(5).fill(word_order[1]))
        } else if (big_event_order[i] == 'scene') {
            let scene_order = shuffle(scene_events)
            event_order.push(...Array(5).fill(scene_order[0]))
            event_order.push(...Array(5).fill(scene_order[1]))
        }
    }

    return ({
        big_event_order: big_event_order,
        event_order: event_order
    })

}


// function that creates images for encoding phase
function correct_answer(event_type, img_code, labels) {

    let answer
    // pick images
    if (event_type == "origin") {
        if (img_code.includes('m')) {
            answer = labels[0] == "manmade" ? "left": "right"
        } else if (img_code.includes('n')) {
            answer = labels[0] == "natural" ? "left": "right"
        }
    } else if (event_type == "size") {
        if (img_code.includes('l')) {
            answer = labels[0] == "large" ? "left": "right"
        } else if (img_code.includes('s')) {
            answer = labels[0] == "small" ? "left": "right"
        }
    } else if (event_type == "abstractness") {
        if (img_code.includes('a')) {
            answer = labels[0] == "abstract" ? "left": "right"
        } else if (img_code.includes('c')) {
            answer = labels[0] == "concrete" ? "left": "right"
        }
    } else if (event_type == "syllable") {
        if (img_code.includes('1')) {
            answer = labels[0] == "one" ? "left": "right"
        } else if (img_code.includes('2')) {
            answer = labels[0] == "two" ? "left": "right"
        }
    } else if (event_type == "location") {
        if (img_code.includes('i')) {
            answer = labels[0] == "indoor" ? "left": "right"
        } else if (img_code.includes('o')) {
            answer = labels[0] == "outdoor" ? "left": "right"
        }
    } else if (event_type == "building") {
        if (img_code.includes('c')) {
            answer = labels[0] == "cottage" ? "left": "right"
        } else if (img_code.includes('s')) {
            answer = labels[0] == "skyscraper" ? "left": "right"
        }
    } 
    
    return answer

}


// function that makes the choice labels (on left and right)
function make_labels(event_type, leftRight) {

    if (event_type == "origin") {
        if (leftRight == "LR") {
            labels = ['manmade', 'natural']
        } else {
            labels = ['natural', 'manmade']
        }
    } else if (event_type == "size") {
        if (leftRight == "LR") {
            labels = ['small', 'large']
        } else {
            labels = ['large', 'small']
        }
    } else if (event_type == "abstractness") {
        if (leftRight == "LR") {
            labels = ['abstract', 'concrete']
        } else {
            labels = ['concrete', 'abstract']
        }
    } else if (event_type == "syllable") {
        if (leftRight == "LR") {
            labels = ['1 syllable', '2 syllables']
        } else {
            labels = ['2 syllables', '1 syllable']
        }
    } else if (event_type == "location") {
        if (leftRight == "LR") {
            labels = ['indoor', 'outdoor']
        } else {
            labels = ['outdoor', 'indoor']
        }
    } else if (event_type == "building") {
        if (leftRight == "LR") {
            labels = ['cottage', 'skyscraper']
        } else {
            labels = ['skyscraper', 'cottage']
        }
    }

    return labels

}



// encoding
let trials = []
let eventsPerBlock = 3

for (let block = 0; block < 11; block++) {
    let subArray_trials = []
    let sequence = []
    let order = make_event_order()

    for (let event = 0; event < eventsPerBlock; event++) {
        if (order.big_event_order[event] === 'object') {
            sequence.push(...stim_list_objects.slice(10*block, 10*block+10))
        } else if (order.big_event_order[event] === 'word') {
            sequence.push(...stim_list_words.slice(10*block, 10*block+10))
        } else if (order.big_event_order[event] === 'scene') {
            sequence.push(...stim_list_scenes.slice(10*block, 10*block+10))
        }
    }
    for (let trial = 0; trial < 10 * eventsPerBlock; trial++) {

        labels = make_labels(order.event_order[trial], shuffle(['LR','RL'])[0])
        answer = correct_answer(order.event_order[trial], sequence[trial], labels)

        subArray_trials.push(new Data_row({
            time_end: "incomplete",
            practice: block == 0 ? true : false,
            encoding: true,
            block: block,
            trial: trial,
            event: order.event_order[trial],
            stim: sequence[trial],
            answer: answer,
            label_left: labels[0],
            label_right: labels[1]
        }))
    }

    trials.push(subArray_trials)
}





/* memory trials */
let mem_test = [[0,3],[1,4],[2,5],[3,6],[4,7],[5,8],[6,9],[7,10],[8,11],[9,12],
[10,13],[11,14],[12,15],[13,16],[14,17],[15,18],[16,19],[17,20],[18,21],[19,22],
[20,23],[21,24],[22,25],[23,26],[24,27],[25,28],[26,29]]

// function that creates images
function first_appear(testItems, LeftRight, block) {

    let first_img = Math.min(...testItems)
    let last_img = Math.max(...testItems)
    // pick images
    if (LeftRight == "left") {
        left_img = trials[block][first_img].stim
        right_img = trials[block][last_img].stim
    } else if (LeftRight == "right") {
        left_img = trials[block][last_img].stim
        right_img = trials[block][first_img].stim
    }
    // within or between
    if (first_img == 0 || first_img == 1 || first_img == 5 || first_img == 6 || 
        first_img == 10 || first_img == 11 || first_img == 15 || first_img == 16 || 
        first_img == 20 || first_img == 21 || first_img == 25 || first_img == 26) {
        condition = 'within'
    } else if (first_img == 2 || first_img == 3 || first_img == 4 || 
        first_img == 12 || first_img == 13 || first_img == 14 || 
        first_img == 22 || first_img == 23 || first_img == 24) {
        condition = 'between-small'
    } else if (first_img == 7 || first_img == 8 || first_img == 9 ||
        first_img == 17 || first_img == 18 || first_img == 19) {
        condition = 'between-big'
    }

    return ({
        left_img: left_img,
        right_img: right_img,
        condition: condition
    })
}


// memory
let mem_trials = []

for (let block = 0; block < 11; block++) {
    let mem_subArray_trials = []
    mem_test = shuffle(mem_test)

    for (let trial = 0; trial < mem_test.length; trial++) {
        LeftRight = shuffle(["left", "right"])[0]
        let displays = first_appear(mem_test[trial], LeftRight, block)

        mem_subArray_trials.push(new Data_row({
            time_end: "incomplete",
            practice: block == 0 ? true : false,
            memory: true,
            block: block,
            trial: trial,
            answer: LeftRight,
            left_image: displays.left_img,
            right_image: displays.right_img,
            condition: displays.condition
        }))
    }
    mem_trials.push(mem_subArray_trials)
}

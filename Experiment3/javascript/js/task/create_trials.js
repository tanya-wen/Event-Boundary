
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


preLoad.addImages(["images/black.jpg", "images/blue.jpg", "images/brown.jpg", "images/example-1.jpg", "images/example-2.jpg", "images/example-3.jpg", "images/gray.jpg", "images/green.jpg", "images/m_l_001.jpg", "images/m_l_002.jpg", "images/m_l_003.jpg", "images/m_l_004.jpg", "images/m_l_005.jpg", 
"images/m_l_006.jpg", "images/m_l_007.jpg", "images/m_l_008.jpg", "images/m_l_009.jpg", "images/m_l_010.jpg", "images/m_l_011.jpg", "images/m_l_012.jpg", "images/m_l_013.jpg", "images/m_l_014.jpg", "images/m_l_015.jpg", "images/m_l_016.jpg", "images/m_l_017.jpg", "images/m_l_018.jpg", 
"images/m_l_019.jpg", "images/m_l_020.jpg", "images/m_l_021.jpg", "images/m_l_022.jpg", "images/m_l_023.jpg", "images/m_l_024.jpg", "images/m_l_025.jpg", "images/m_l_026.jpg", "images/m_l_027.jpg", "images/m_l_028.jpg", "images/m_l_029.jpg", "images/m_l_030.jpg", "images/m_l_031.jpg", 
"images/m_l_032.jpg", "images/m_l_033.jpg", "images/m_l_034.jpg", "images/m_l_035.jpg", "images/m_l_036.jpg", "images/m_l_037.jpg", "images/m_l_038.jpg", "images/m_l_039.jpg", "images/m_l_040.jpg", "images/m_l_041.jpg", "images/m_l_042.jpg", "images/m_l_043.jpg", "images/m_l_044.jpg", 
"images/m_l_045.jpg", "images/m_l_046.jpg", "images/m_l_047.jpg", "images/m_l_048.jpg", "images/m_l_049.jpg", "images/m_l_050.jpg", "images/m_l_051.jpg", "images/m_l_052.jpg", "images/m_l_053.jpg", "images/m_l_054.jpg", "images/m_l_055.jpg", "images/m_l_056.jpg", "images/m_l_057.jpg", 
"images/m_l_058.jpg", "images/m_l_059.jpg", "images/m_l_060.jpg", "images/m_l_061.jpg", "images/m_l_062.jpg", "images/m_l_063.jpg", "images/m_l_064.jpg", "images/m_l_065.jpg", "images/m_l_066.jpg", "images/m_l_067.jpg", "images/m_l_068.jpg", "images/m_l_069.jpg", "images/m_l_070.jpg", 
"images/m_l_071.jpg", "images/m_l_072.jpg", "images/m_l_073.jpg", "images/m_l_074.jpg", "images/m_l_075.jpg", "images/m_l_076.jpg", "images/m_l_077.jpg", "images/m_l_078.jpg", "images/m_l_079.jpg", "images/m_l_080.jpg", "images/m_l_081.jpg", "images/m_l_082.jpg", "images/m_l_083.jpg", 
"images/m_l_084.jpg", "images/m_l_085.jpg", "images/m_l_086.jpg", "images/m_l_087.jpg", "images/m_l_088.jpg", "images/m_l_089.jpg", "images/m_l_090.jpg", "images/m_l_091.jpg", "images/m_l_092.jpg", "images/m_l_093.jpg", "images/m_l_094.jpg", "images/m_l_095.jpg", "images/m_l_096.jpg", 
"images/m_l_097.jpg", "images/m_l_098.jpg", "images/m_l_099.jpg", "images/m_l_100.jpg", "images/m_l_101.jpg", "images/m_l_102.jpg", "images/m_l_103.jpg", "images/m_l_104.jpg", "images/m_l_105.jpg", "images/m_l_106.jpg", "images/m_l_107.jpg", "images/m_l_108.jpg", "images/m_l_109.jpg", 
"images/m_l_110.jpg", "images/m_l_111.jpg", "images/m_l_112.jpg", "images/m_l_113.jpg", "images/m_l_114.jpg", "images/m_l_115.jpg", "images/m_l_116.jpg", "images/m_l_117.jpg", "images/m_s_001.jpg", "images/m_s_002.jpg", "images/m_s_003.jpg", "images/m_s_004.jpg", "images/m_s_005.jpg", 
"images/m_s_006.jpg", "images/m_s_007.jpg", "images/m_s_008.jpg", "images/m_s_009.jpg", "images/m_s_010.jpg", "images/m_s_011.jpg", "images/m_s_012.jpg", "images/m_s_013.jpg", "images/m_s_014.jpg", "images/m_s_015.jpg", "images/m_s_016.jpg", "images/m_s_017.jpg", "images/m_s_018.jpg", 
"images/m_s_019.jpg", "images/m_s_020.jpg", "images/m_s_021.jpg", "images/m_s_022.jpg", "images/m_s_023.jpg", "images/m_s_024.jpg", "images/m_s_025.jpg", "images/m_s_026.jpg", "images/m_s_027.jpg", "images/m_s_028.jpg", "images/m_s_029.jpg", "images/m_s_030.jpg", "images/m_s_031.jpg", 
"images/m_s_032.jpg", "images/m_s_033.jpg", "images/m_s_034.jpg", "images/m_s_035.jpg", "images/m_s_036.jpg", "images/m_s_037.jpg", "images/m_s_038.jpg", "images/m_s_039.jpg", "images/m_s_040.jpg", "images/m_s_041.jpg", "images/m_s_042.jpg", "images/m_s_043.jpg", "images/m_s_044.jpg", 
"images/m_s_045.jpg", "images/m_s_046.jpg", "images/m_s_047.jpg", "images/m_s_048.jpg", "images/m_s_049.jpg", "images/m_s_050.jpg", "images/m_s_051.jpg", "images/m_s_052.jpg", "images/m_s_053.jpg", "images/m_s_054.jpg", "images/m_s_055.jpg", "images/m_s_056.jpg", "images/m_s_057.jpg", 
"images/m_s_058.jpg", "images/m_s_059.jpg", "images/m_s_060.jpg", "images/m_s_061.jpg", "images/m_s_062.jpg", "images/m_s_063.jpg", "images/m_s_064.jpg", "images/m_s_065.jpg", "images/m_s_066.jpg", "images/m_s_067.jpg", "images/m_s_068.jpg", "images/m_s_069.jpg", "images/m_s_070.jpg", 
"images/m_s_071.jpg", "images/m_s_072.jpg", "images/m_s_073.jpg", "images/m_s_074.jpg", "images/m_s_075.jpg", "images/m_s_076.jpg", "images/m_s_077.jpg", "images/m_s_078.jpg", "images/m_s_079.jpg", "images/m_s_080.jpg", "images/m_s_081.jpg", "images/m_s_082.jpg", "images/m_s_083.jpg", 
"images/m_s_084.jpg", "images/m_s_085.jpg", "images/m_s_086.jpg", "images/m_s_087.jpg", "images/m_s_088.jpg", "images/m_s_089.jpg", "images/m_s_090.jpg", "images/m_s_091.jpg", "images/m_s_092.jpg", "images/m_s_093.jpg", "images/m_s_094.jpg", "images/m_s_095.jpg", "images/m_s_096.jpg", 
"images/m_s_097.jpg", "images/m_s_098.jpg", "images/m_s_099.jpg", "images/m_s_100.jpg", "images/m_s_101.jpg", "images/m_s_102.jpg", "images/m_s_103.jpg", "images/m_s_104.jpg", "images/m_s_105.jpg", "images/m_s_106.jpg", "images/m_s_107.jpg", "images/m_s_108.jpg", "images/m_s_109.jpg", 
"images/m_s_110.jpg", "images/m_s_111.jpg", "images/m_s_112.jpg", "images/m_s_113.jpg", "images/m_s_114.jpg", "images/m_s_115.jpg", "images/m_s_116.jpg", "images/m_s_117.jpg", "images/n_l_001.jpg", "images/n_l_002.jpg", "images/n_l_003.jpg", "images/n_l_004.jpg", "images/n_l_005.jpg", 
"images/n_l_006.jpg", "images/n_l_007.jpg", "images/n_l_008.jpg", "images/n_l_009.jpg", "images/n_l_010.jpg", "images/n_l_011.jpg", "images/n_l_012.jpg", "images/n_l_013.jpg", "images/n_l_014.jpg", "images/n_l_015.jpg", "images/n_l_016.jpg", "images/n_l_017.jpg", "images/n_l_018.jpg", 
"images/n_l_019.jpg", "images/n_l_020.jpg", "images/n_l_021.jpg", "images/n_l_022.jpg", "images/n_l_023.jpg", "images/n_l_024.jpg", "images/n_l_025.jpg", "images/n_l_026.jpg", "images/n_l_027.jpg", "images/n_l_028.jpg", "images/n_l_029.jpg", "images/n_l_030.jpg", "images/n_l_031.jpg", 
"images/n_l_032.jpg", "images/n_l_033.jpg", "images/n_l_034.jpg", "images/n_l_035.jpg", "images/n_l_036.jpg", "images/n_l_037.jpg", "images/n_l_038.jpg", "images/n_l_039.jpg", "images/n_l_040.jpg", "images/n_l_041.jpg", "images/n_l_042.jpg", "images/n_l_043.jpg", "images/n_l_044.jpg", 
"images/n_l_045.jpg", "images/n_l_046.jpg", "images/n_l_047.jpg", "images/n_l_048.jpg", "images/n_l_049.jpg", "images/n_l_050.jpg", "images/n_l_051.jpg", "images/n_l_052.jpg", "images/n_l_053.jpg", "images/n_l_054.jpg", "images/n_l_055.jpg", "images/n_l_056.jpg", "images/n_l_057.jpg", 
"images/n_l_058.jpg", "images/n_l_059.jpg", "images/n_l_060.jpg", "images/n_l_061.jpg", "images/n_l_062.jpg", "images/n_l_063.jpg", "images/n_l_064.jpg", "images/n_l_065.jpg", "images/n_l_066.jpg", "images/n_l_067.jpg", "images/n_l_068.jpg", "images/n_l_069.jpg", "images/n_l_070.jpg", 
"images/n_l_071.jpg", "images/n_l_072.jpg", "images/n_l_073.jpg", "images/n_l_074.jpg", "images/n_l_075.jpg", "images/n_l_076.jpg", "images/n_l_077.jpg", "images/n_l_078.jpg", "images/n_l_079.jpg", "images/n_l_080.jpg", "images/n_l_081.jpg", "images/n_l_082.jpg", "images/n_l_083.jpg", 
"images/n_l_084.jpg", "images/n_l_085.jpg", "images/n_l_086.jpg", "images/n_l_087.jpg", "images/n_l_088.jpg", "images/n_l_089.jpg", "images/n_l_090.jpg", "images/n_l_091.jpg", "images/n_l_092.jpg", "images/n_l_093.jpg", "images/n_l_094.jpg", "images/n_l_095.jpg", "images/n_l_096.jpg", 
"images/n_l_097.jpg", "images/n_l_098.jpg", "images/n_l_099.jpg", "images/n_l_100.jpg", "images/n_l_101.jpg", "images/n_l_102.jpg", "images/n_l_103.jpg", "images/n_l_104.jpg", "images/n_l_105.jpg", "images/n_l_106.jpg", "images/n_l_107.jpg", "images/n_l_108.jpg", "images/n_l_109.jpg", 
"images/n_l_110.jpg", "images/n_l_111.jpg", "images/n_l_112.jpg", "images/n_l_113.jpg", "images/n_l_114.jpg", "images/n_l_115.jpg", "images/n_l_116.jpg", "images/n_l_117.jpg", "images/n_s_001.jpg", "images/n_s_002.jpg", "images/n_s_003.jpg", "images/n_s_004.jpg", "images/n_s_005.jpg", 
"images/n_s_006.jpg", "images/n_s_007.jpg", "images/n_s_008.jpg", "images/n_s_009.jpg", "images/n_s_010.jpg", "images/n_s_011.jpg", "images/n_s_012.jpg", "images/n_s_013.jpg", "images/n_s_014.jpg", "images/n_s_015.jpg", "images/n_s_016.jpg", "images/n_s_017.jpg", "images/n_s_018.jpg", 
"images/n_s_019.jpg", "images/n_s_020.jpg", "images/n_s_021.jpg", "images/n_s_022.jpg", "images/n_s_023.jpg", "images/n_s_024.jpg", "images/n_s_025.jpg", "images/n_s_026.jpg", "images/n_s_027.jpg", "images/n_s_028.jpg", "images/n_s_029.jpg", "images/n_s_030.jpg", "images/n_s_031.jpg", 
"images/n_s_032.jpg", "images/n_s_033.jpg", "images/n_s_034.jpg", "images/n_s_035.jpg", "images/n_s_036.jpg", "images/n_s_037.jpg", "images/n_s_038.jpg", "images/n_s_039.jpg", "images/n_s_040.jpg", "images/n_s_041.jpg", "images/n_s_042.jpg", "images/n_s_043.jpg", "images/n_s_044.jpg", 
"images/n_s_045.jpg", "images/n_s_046.jpg", "images/n_s_047.jpg", "images/n_s_048.jpg", "images/n_s_049.jpg", "images/n_s_050.jpg", "images/n_s_051.jpg", "images/n_s_052.jpg", "images/n_s_053.jpg", "images/n_s_054.jpg", "images/n_s_055.jpg", "images/n_s_056.jpg", "images/n_s_057.jpg", 
"images/n_s_058.jpg", "images/n_s_059.jpg", "images/n_s_060.jpg", "images/n_s_061.jpg", "images/n_s_062.jpg", "images/n_s_063.jpg", "images/n_s_064.jpg", "images/n_s_065.jpg", "images/n_s_066.jpg", "images/n_s_067.jpg", "images/n_s_068.jpg", "images/n_s_069.jpg", "images/n_s_070.jpg", 
"images/n_s_071.jpg", "images/n_s_072.jpg", "images/n_s_073.jpg", "images/n_s_074.jpg", "images/n_s_075.jpg", "images/n_s_076.jpg", "images/n_s_077.jpg", "images/n_s_078.jpg", "images/n_s_079.jpg", "images/n_s_080.jpg", "images/n_s_081.jpg", "images/n_s_082.jpg", "images/n_s_083.jpg", 
"images/n_s_084.jpg", "images/n_s_085.jpg", "images/n_s_086.jpg", "images/n_s_087.jpg", "images/n_s_088.jpg", "images/n_s_089.jpg", "images/n_s_090.jpg", "images/n_s_091.jpg", "images/n_s_092.jpg", "images/n_s_093.jpg", "images/n_s_094.jpg", "images/n_s_095.jpg", "images/n_s_096.jpg", 
"images/n_s_097.jpg", "images/n_s_098.jpg", "images/n_s_099.jpg", "images/n_s_100.jpg", "images/n_s_101.jpg", "images/n_s_102.jpg", "images/n_s_103.jpg", "images/n_s_104.jpg", "images/n_s_105.jpg", "images/n_s_106.jpg", "images/n_s_107.jpg", "images/n_s_108.jpg", "images/n_s_109.jpg", 
"images/n_s_110.jpg", "images/n_s_111.jpg", "images/n_s_112.jpg", "images/n_s_113.jpg", "images/n_s_114.jpg", "images/n_s_115.jpg", "images/n_s_116.jpg", "images/n_s_117.jpg", "images/orange.jpg", "images/purple.jpg", "images/red.jpg", "images/white.jpg", "images/yellow.jpg"])


let stim_list_objects = shuffle(["m_l_001.jpg", "m_l_002.jpg", "m_l_003.jpg", "m_l_004.jpg", "m_l_005.jpg", "m_l_006.jpg", "m_l_007.jpg", "m_l_008.jpg", "m_l_009.jpg", "m_l_010.jpg", "m_l_011.jpg", "m_l_012.jpg", "m_l_013.jpg", "m_l_014.jpg", "m_l_015.jpg", "m_l_016.jpg", "m_l_017.jpg", "m_l_018.jpg", "m_l_019.jpg", "m_l_020.jpg", "m_l_021.jpg", "m_l_022.jpg", "m_l_023.jpg", "m_l_024.jpg", "m_l_025.jpg", "m_l_026.jpg", "m_l_027.jpg", "m_l_028.jpg", "m_l_029.jpg", "m_l_030.jpg", "m_l_031.jpg", "m_l_032.jpg", "m_l_033.jpg", "m_l_034.jpg", "m_l_035.jpg", "m_l_036.jpg", "m_l_037.jpg", "m_l_038.jpg", "m_l_039.jpg", "m_l_040.jpg", "m_l_041.jpg", "m_l_042.jpg", "m_l_043.jpg", "m_l_044.jpg", "m_l_045.jpg", "m_l_046.jpg", "m_l_047.jpg", "m_l_048.jpg", "m_l_049.jpg", "m_l_050.jpg", "m_l_051.jpg", "m_l_052.jpg", "m_l_053.jpg", "m_l_054.jpg", "m_l_055.jpg", "m_l_056.jpg", "m_l_057.jpg", "m_l_058.jpg", "m_l_059.jpg", "m_l_060.jpg", "m_l_061.jpg", "m_l_062.jpg", "m_l_063.jpg", "m_l_064.jpg", "m_l_065.jpg", "m_l_066.jpg", "m_l_067.jpg", "m_l_068.jpg", "m_l_069.jpg", "m_l_070.jpg", "m_l_071.jpg", "m_l_072.jpg", "m_l_073.jpg", "m_l_074.jpg", "m_l_075.jpg", "m_l_076.jpg", "m_l_077.jpg", "m_l_078.jpg", "m_l_079.jpg", "m_l_080.jpg", "m_l_081.jpg", "m_l_082.jpg", "m_l_083.jpg", "m_l_084.jpg", "m_l_085.jpg", "m_l_086.jpg", "m_l_087.jpg", "m_l_088.jpg", "m_l_089.jpg", "m_l_090.jpg", "m_l_091.jpg", "m_l_092.jpg", "m_l_093.jpg", "m_l_094.jpg", "m_l_095.jpg", "m_l_096.jpg", "m_l_097.jpg", "m_l_098.jpg", "m_l_099.jpg", "m_l_100.jpg", "m_l_101.jpg", "m_l_102.jpg", "m_l_103.jpg", "m_l_104.jpg", "m_l_105.jpg", "m_l_106.jpg", "m_l_107.jpg", "m_l_108.jpg", "m_l_109.jpg", "m_l_110.jpg", "m_l_111.jpg", "m_l_112.jpg", "m_l_113.jpg", "m_l_114.jpg", "m_l_115.jpg", "m_l_116.jpg", "m_l_117.jpg", "m_s_001.jpg", "m_s_002.jpg", "m_s_003.jpg", "m_s_004.jpg", "m_s_005.jpg", "m_s_006.jpg", "m_s_007.jpg", "m_s_008.jpg", "m_s_009.jpg", "m_s_010.jpg", "m_s_011.jpg", "m_s_012.jpg", "m_s_013.jpg", "m_s_014.jpg", "m_s_015.jpg", "m_s_016.jpg", "m_s_017.jpg", "m_s_018.jpg", "m_s_019.jpg", "m_s_020.jpg", "m_s_021.jpg", "m_s_022.jpg", "m_s_023.jpg", "m_s_024.jpg", "m_s_025.jpg", "m_s_026.jpg", "m_s_027.jpg", "m_s_028.jpg", "m_s_029.jpg", "m_s_030.jpg", "m_s_031.jpg", "m_s_032.jpg", "m_s_033.jpg", "m_s_034.jpg", "m_s_035.jpg", "m_s_036.jpg", "m_s_037.jpg", "m_s_038.jpg", "m_s_039.jpg", "m_s_040.jpg", "m_s_041.jpg", "m_s_042.jpg", "m_s_043.jpg", "m_s_044.jpg", "m_s_045.jpg", "m_s_046.jpg", "m_s_047.jpg", "m_s_048.jpg", "m_s_049.jpg", "m_s_050.jpg", "m_s_051.jpg", "m_s_052.jpg", "m_s_053.jpg", "m_s_054.jpg", "m_s_055.jpg", "m_s_056.jpg", "m_s_057.jpg", "m_s_058.jpg", "m_s_059.jpg", "m_s_060.jpg", "m_s_061.jpg", "m_s_062.jpg", "m_s_063.jpg", "m_s_064.jpg", "m_s_065.jpg", "m_s_066.jpg", "m_s_067.jpg", "m_s_068.jpg", "m_s_069.jpg", "m_s_070.jpg", "m_s_071.jpg", "m_s_072.jpg", "m_s_073.jpg", "m_s_074.jpg", "m_s_075.jpg", "m_s_076.jpg", "m_s_077.jpg", "m_s_078.jpg", "m_s_079.jpg", "m_s_080.jpg", "m_s_081.jpg", "m_s_082.jpg", "m_s_083.jpg", "m_s_084.jpg", "m_s_085.jpg", "m_s_086.jpg", "m_s_087.jpg", "m_s_088.jpg", "m_s_089.jpg", "m_s_090.jpg", "m_s_091.jpg", "m_s_092.jpg", "m_s_093.jpg", "m_s_094.jpg", "m_s_095.jpg", "m_s_096.jpg", "m_s_097.jpg", "m_s_098.jpg", "m_s_099.jpg", "m_s_100.jpg", "m_s_101.jpg", "m_s_102.jpg", "m_s_103.jpg", "m_s_104.jpg", "m_s_105.jpg", "m_s_106.jpg", "m_s_107.jpg", "m_s_108.jpg", "m_s_109.jpg", "m_s_110.jpg", "m_s_111.jpg", "m_s_112.jpg", "m_s_113.jpg", "m_s_114.jpg", "m_s_115.jpg", "m_s_116.jpg", "m_s_117.jpg", "n_l_001.jpg", "n_l_002.jpg", "n_l_003.jpg", "n_l_004.jpg", "n_l_005.jpg", "n_l_006.jpg", "n_l_007.jpg", "n_l_008.jpg", "n_l_009.jpg", "n_l_010.jpg", "n_l_011.jpg", "n_l_012.jpg", "n_l_013.jpg", "n_l_014.jpg", "n_l_015.jpg", "n_l_016.jpg", "n_l_017.jpg", "n_l_018.jpg", "n_l_019.jpg", "n_l_020.jpg", "n_l_021.jpg", "n_l_022.jpg", "n_l_023.jpg", "n_l_024.jpg", "n_l_025.jpg", "n_l_026.jpg", "n_l_027.jpg", "n_l_028.jpg", "n_l_029.jpg", "n_l_030.jpg", "n_l_031.jpg", "n_l_032.jpg", "n_l_033.jpg", "n_l_034.jpg", "n_l_035.jpg", "n_l_036.jpg", "n_l_037.jpg", "n_l_038.jpg", "n_l_039.jpg", "n_l_040.jpg", "n_l_041.jpg", "n_l_042.jpg", "n_l_043.jpg", "n_l_044.jpg", "n_l_045.jpg", "n_l_046.jpg", "n_l_047.jpg", "n_l_048.jpg", "n_l_049.jpg", "n_l_050.jpg", "n_l_051.jpg", "n_l_052.jpg", "n_l_053.jpg", "n_l_054.jpg", "n_l_055.jpg", "n_l_056.jpg", "n_l_057.jpg", "n_l_058.jpg", "n_l_059.jpg", "n_l_060.jpg", "n_l_061.jpg", "n_l_062.jpg", "n_l_063.jpg", "n_l_064.jpg", "n_l_065.jpg", "n_l_066.jpg", "n_l_067.jpg", "n_l_068.jpg", "n_l_069.jpg", "n_l_070.jpg", "n_l_071.jpg", "n_l_072.jpg", "n_l_073.jpg", "n_l_074.jpg", "n_l_075.jpg", "n_l_076.jpg", "n_l_077.jpg", "n_l_078.jpg", "n_l_079.jpg", "n_l_080.jpg", "n_l_081.jpg", "n_l_082.jpg", "n_l_083.jpg", "n_l_084.jpg", "n_l_085.jpg", "n_l_086.jpg", "n_l_087.jpg", "n_l_088.jpg", "n_l_089.jpg", "n_l_090.jpg", "n_l_091.jpg", "n_l_092.jpg", "n_l_093.jpg", "n_l_094.jpg", "n_l_095.jpg", "n_l_096.jpg", "n_l_097.jpg", "n_l_098.jpg", "n_l_099.jpg", "n_l_100.jpg", "n_l_101.jpg", "n_l_102.jpg", "n_l_103.jpg", "n_l_104.jpg", "n_l_105.jpg", "n_l_106.jpg", "n_l_107.jpg", "n_l_108.jpg", "n_l_109.jpg", "n_l_110.jpg", "n_l_111.jpg", "n_l_112.jpg", "n_l_113.jpg", "n_l_114.jpg", "n_l_115.jpg", "n_l_116.jpg", "n_l_117.jpg", "n_s_001.jpg", "n_s_002.jpg", "n_s_003.jpg", "n_s_004.jpg", "n_s_005.jpg", "n_s_006.jpg", "n_s_007.jpg", "n_s_008.jpg", "n_s_009.jpg", "n_s_010.jpg", "n_s_011.jpg", "n_s_012.jpg", "n_s_013.jpg", "n_s_014.jpg", "n_s_015.jpg", "n_s_016.jpg", "n_s_017.jpg", "n_s_018.jpg", "n_s_019.jpg", "n_s_020.jpg", "n_s_021.jpg", "n_s_022.jpg", "n_s_023.jpg", "n_s_024.jpg", "n_s_025.jpg", "n_s_026.jpg", "n_s_027.jpg", "n_s_028.jpg", "n_s_029.jpg", "n_s_030.jpg", "n_s_031.jpg", "n_s_032.jpg", "n_s_033.jpg", "n_s_034.jpg", "n_s_035.jpg", "n_s_036.jpg", "n_s_037.jpg", "n_s_038.jpg", "n_s_039.jpg", "n_s_040.jpg", "n_s_041.jpg", "n_s_042.jpg", "n_s_043.jpg", "n_s_044.jpg", "n_s_045.jpg", "n_s_046.jpg", "n_s_047.jpg", "n_s_048.jpg", "n_s_049.jpg", "n_s_050.jpg", "n_s_051.jpg", "n_s_052.jpg", "n_s_053.jpg", "n_s_054.jpg", "n_s_055.jpg", "n_s_056.jpg", "n_s_057.jpg", "n_s_058.jpg", "n_s_059.jpg", "n_s_060.jpg", "n_s_061.jpg", "n_s_062.jpg", "n_s_063.jpg", "n_s_064.jpg", "n_s_065.jpg", "n_s_066.jpg", "n_s_067.jpg", "n_s_068.jpg", "n_s_069.jpg", "n_s_070.jpg", "n_s_071.jpg", "n_s_072.jpg", "n_s_073.jpg", "n_s_074.jpg", "n_s_075.jpg", "n_s_076.jpg", "n_s_077.jpg", "n_s_078.jpg", "n_s_079.jpg", "n_s_080.jpg", "n_s_081.jpg", "n_s_082.jpg", "n_s_083.jpg", "n_s_084.jpg", "n_s_085.jpg", "n_s_086.jpg", "n_s_087.jpg", "n_s_088.jpg", "n_s_089.jpg", "n_s_090.jpg", "n_s_091.jpg", "n_s_092.jpg", "n_s_093.jpg", "n_s_094.jpg", "n_s_095.jpg", "n_s_096.jpg", "n_s_097.jpg", "n_s_098.jpg", "n_s_099.jpg", "n_s_100.jpg", "n_s_101.jpg", "n_s_102.jpg", "n_s_103.jpg", "n_s_104.jpg", "n_s_105.jpg", "n_s_106.jpg", "n_s_107.jpg", "n_s_108.jpg", "n_s_109.jpg", "n_s_110.jpg", "n_s_111.jpg", "n_s_112.jpg", "n_s_113.jpg", "n_s_114.jpg", "n_s_115.jpg", "n_s_116.jpg", "n_s_117.jpg"])


/* encoding trials */
// function that randomizes the order of colors (events) for encoding phase
function make_event_order() {

    // color_list = [
    //     [255, 255, 255], // white
    //     [0, 0, 0], // black
    //     [0, 128, 0], // green
    //     [255, 0, 0], // red
    //     [30, 144, 255], // blue
    //     [255, 140, 0], // orange
    //     [160, 82, 45], // brown
    //     [255, 255, 0], // yellow
    //     [138, 43, 226], // purple
    //     [128, 128, 128] // gray
    // ]
    color_names = ["white", "black", "green", "red", "blue", "orange", "brown", "yellow", "purple", "gray"]

    rnd = shuffle([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
    return ({
        event: [...Array(6).fill(color_names[rnd[0]]), 
        ...Array(6).fill(color_names[rnd[1]]), 
        ...Array(6).fill(color_names[rnd[2]]),
        ...Array(6).fill(color_names[rnd[3]]),
        ...Array(6).fill(color_names[rnd[4]]),
        ...Array(6).fill(color_names[rnd[5]])]
    })

}


// function that makes the choice labels (on left and right)
function make_labels(leftRight) {

    if (leftRight == "LR") {
        labels = ['pleasant', 'unpleasant']
    } else {
        labels = ['unpleasant', 'pleasant']
    }

    return labels

}



// encoding
let trials = []
let eventsPerBlock = 6

for (let block = 0; block < 13; block++) {
    let subArray_trials = []
    let sequence = []
    let order = make_event_order()

    sequence.push(...stim_list_objects.slice(36 * block, 36 * block + 36))

    for (let trial = 0; trial < 36; trial++) {

        labels = make_labels(shuffle(['LR', 'RL'])[0])

        subArray_trials.push(new Data_row({
            time_end: "incomplete",
            practice: block == 0 ? true : false,
            encoding: true,
            block: block,
            trial: trial,
            event: order.event[trial],
            stim: sequence[trial],
            label_left: labels[0],
            label_right: labels[1]
        }))
    }

    trials.push(subArray_trials)
}





/* memory trials */
let mem_test = [[1,5], [4,8], [7,11], [10,14], [13,17], [16,20], [19,23], [22,26], [25,29], [28,32], [31,35]]

// function that creates images
function first_appear(testItems, LeftRight, block) {

    let first_img = Math.min(...testItems)
    let last_img = Math.max(...testItems)
    // pick images
    if (LeftRight == "left") {
        left_img = trials[block][first_img].stim
        left_event = trials[block][first_img].event
        right_img = trials[block][last_img].stim
        right_event = trials[block][last_img].event
    } else if (LeftRight == "right") {
        left_img = trials[block][last_img].stim
        left_event = trials[block][last_img].event
        right_img = trials[block][first_img].stim
        right_event = trials[block][first_img].event
    }
    // within or between
    if (first_img == 1 || first_img == 7 || first_img == 13 || first_img == 19 || first_img == 25 || first_img == 31) {
        condition = 'within'
    } else if (first_img == 4 || first_img == 10 || first_img == 16 || first_img == 22 || first_img == 28) {
        condition = 'between'
    }

    return ({
        left_img: left_img,
        left_event: left_event,
        right_img: right_img,
        right_event: right_event,
        condition: condition
    })
}


// memory
let mem_trials = []
let context_type = shuffle([...Array(6).fill("present"), ...Array(6).fill("absent")])

for (let block = 0; block < 13; block++) {
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
            context_type: block == 0 ? shuffle(["present","absent"])[0] : context_type[block-1],
            left_image: displays.left_img,
            left_event: displays.left_event,
            right_image: displays.right_img,
            right_event: displays.right_event,
            condition: displays.condition
        }))
    }
    mem_trials.push(mem_subArray_trials)
}

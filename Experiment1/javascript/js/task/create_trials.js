
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


preLoad.addImages(["images/stimuli/E10_Q10_ansR.png", "images/stimuli/E10_Q1_ansL.png", "images/stimuli/E10_Q2_ansL.png", "images/stimuli/E10_Q3_ansL.png", "images/stimuli/E10_Q4_ansL.png", "images/stimuli/E10_Q5_ansR.png", "images/stimuli/E10_Q6_ansR.png", "images/stimuli/E10_Q7_ansR.png", "images/stimuli/E10_Q8_ansR.png", "images/stimuli/E10_Q9_ansL.png", 
"images/stimuli/E11_Q10_ansR.png", "images/stimuli/E11_Q1_ansR.png", "images/stimuli/E11_Q2_ansR.png", "images/stimuli/E11_Q3_ansL.png", "images/stimuli/E11_Q4_ansL.png", "images/stimuli/E11_Q5_ansL.png", "images/stimuli/E11_Q6_ansL.png", "images/stimuli/E11_Q7_ansR.png", "images/stimuli/E11_Q8_ansR.png", "images/stimuli/E11_Q9_ansL.png", 
"images/stimuli/E12_Q10_ansL.png", "images/stimuli/E12_Q1_ansL.png", "images/stimuli/E12_Q2_ansL.png", "images/stimuli/E12_Q3_ansR.png", "images/stimuli/E12_Q4_ansR.png", "images/stimuli/E12_Q5_ansR.png", "images/stimuli/E12_Q6_ansR.png", "images/stimuli/E12_Q7_ansL.png", "images/stimuli/E12_Q8_ansL.png", "images/stimuli/E12_Q9_ansR.png", 
"images/stimuli/E13_Q10_ansL.png", "images/stimuli/E13_Q1_ansL.png", "images/stimuli/E13_Q2_ansL.png", "images/stimuli/E13_Q3_ansR.png", "images/stimuli/E13_Q4_ansR.png", "images/stimuli/E13_Q5_ansR.png", "images/stimuli/E13_Q6_ansR.png", "images/stimuli/E13_Q7_ansL.png", "images/stimuli/E13_Q8_ansL.png", "images/stimuli/E13_Q9_ansR.png", 
"images/stimuli/E14_Q10_ansL.png", "images/stimuli/E14_Q1_ansL.png", "images/stimuli/E14_Q2_ansL.png", "images/stimuli/E14_Q3_ansR.png", "images/stimuli/E14_Q4_ansR.png", "images/stimuli/E14_Q5_ansR.png", "images/stimuli/E14_Q6_ansR.png", "images/stimuli/E14_Q7_ansL.png", "images/stimuli/E14_Q8_ansL.png", "images/stimuli/E14_Q9_ansR.png", 
"images/stimuli/E15_Q10_ansL.png", "images/stimuli/E15_Q1_ansL.png", "images/stimuli/E15_Q2_ansL.png", "images/stimuli/E15_Q3_ansR.png", "images/stimuli/E15_Q4_ansR.png", "images/stimuli/E15_Q5_ansR.png", "images/stimuli/E15_Q6_ansR.png", "images/stimuli/E15_Q7_ansL.png", "images/stimuli/E15_Q8_ansL.png", "images/stimuli/E15_Q9_ansR.png", 
"images/stimuli/E16_Q10_ansR.png", "images/stimuli/E16_Q1_ansR.png", "images/stimuli/E16_Q2_ansR.png", "images/stimuli/E16_Q3_ansL.png", "images/stimuli/E16_Q4_ansL.png", "images/stimuli/E16_Q5_ansL.png", "images/stimuli/E16_Q6_ansL.png", "images/stimuli/E16_Q7_ansR.png", "images/stimuli/E16_Q8_ansR.png", "images/stimuli/E16_Q9_ansL.png", 
"images/stimuli/E17_Q10_ansL.png", "images/stimuli/E17_Q1_ansL.png", "images/stimuli/E17_Q2_ansL.png", "images/stimuli/E17_Q3_ansR.png", "images/stimuli/E17_Q4_ansR.png", "images/stimuli/E17_Q5_ansR.png", "images/stimuli/E17_Q6_ansR.png", "images/stimuli/E17_Q7_ansL.png", "images/stimuli/E17_Q8_ansL.png", "images/stimuli/E17_Q9_ansR.png", 
"images/stimuli/E18_Q10_ansL.png", "images/stimuli/E18_Q1_ansL.png", "images/stimuli/E18_Q2_ansL.png", "images/stimuli/E18_Q3_ansR.png", "images/stimuli/E18_Q4_ansR.png", "images/stimuli/E18_Q5_ansR.png", "images/stimuli/E18_Q6_ansR.png", "images/stimuli/E18_Q7_ansL.png", "images/stimuli/E18_Q8_ansL.png", "images/stimuli/E18_Q9_ansR.png", 
"images/stimuli/E19_Q10_ansL.png", "images/stimuli/E19_Q1_ansL.png", "images/stimuli/E19_Q2_ansL.png", "images/stimuli/E19_Q3_ansR.png", "images/stimuli/E19_Q4_ansR.png", "images/stimuli/E19_Q5_ansR.png", "images/stimuli/E19_Q6_ansR.png", "images/stimuli/E19_Q7_ansL.png", "images/stimuli/E19_Q8_ansL.png", "images/stimuli/E19_Q9_ansR.png", 
"images/stimuli/E1_Q10_ansR.png", "images/stimuli/E1_Q1_ansL.png", "images/stimuli/E1_Q2_ansL.png", "images/stimuli/E1_Q3_ansR.png", "images/stimuli/E1_Q4_ansL.png", "images/stimuli/E1_Q5_ansR.png", "images/stimuli/E1_Q6_ansR.png", "images/stimuli/E1_Q7_ansL.png", "images/stimuli/E1_Q8_ansR.png", "images/stimuli/E1_Q9_ansL.png", 
"images/stimuli/E20_Q10_ansL.png", "images/stimuli/E20_Q1_ansL.png", "images/stimuli/E20_Q2_ansL.png", "images/stimuli/E20_Q3_ansR.png", "images/stimuli/E20_Q4_ansR.png", "images/stimuli/E20_Q5_ansR.png", "images/stimuli/E20_Q6_ansR.png", "images/stimuli/E20_Q7_ansL.png", "images/stimuli/E20_Q8_ansL.png", "images/stimuli/E20_Q9_ansR.png", 
"images/stimuli/E21_Q10_ansL.png", "images/stimuli/E21_Q1_ansL.png", "images/stimuli/E21_Q2_ansL.png", "images/stimuli/E21_Q3_ansR.png", "images/stimuli/E21_Q4_ansR.png", "images/stimuli/E21_Q5_ansR.png", "images/stimuli/E21_Q6_ansR.png", "images/stimuli/E21_Q7_ansL.png", "images/stimuli/E21_Q8_ansL.png", "images/stimuli/E21_Q9_ansR.png", 
"images/stimuli/E22_Q10_ansR.png", "images/stimuli/E22_Q1_ansR.png", "images/stimuli/E22_Q2_ansR.png", "images/stimuli/E22_Q3_ansL.png", "images/stimuli/E22_Q4_ansL.png", "images/stimuli/E22_Q5_ansL.png", "images/stimuli/E22_Q6_ansL.png", "images/stimuli/E22_Q7_ansR.png", "images/stimuli/E22_Q8_ansR.png", "images/stimuli/E22_Q9_ansL.png", 
"images/stimuli/E23_Q10_ansL.png", "images/stimuli/E23_Q1_ansL.png", "images/stimuli/E23_Q2_ansL.png", "images/stimuli/E23_Q3_ansR.png", "images/stimuli/E23_Q4_ansR.png", "images/stimuli/E23_Q5_ansR.png", "images/stimuli/E23_Q6_ansR.png", "images/stimuli/E23_Q7_ansL.png", "images/stimuli/E23_Q8_ansL.png", "images/stimuli/E23_Q9_ansR.png", 
"images/stimuli/E24_Q10_ansR.png", "images/stimuli/E24_Q1_ansR.png", "images/stimuli/E24_Q2_ansR.png", "images/stimuli/E24_Q3_ansL.png", "images/stimuli/E24_Q4_ansL.png", "images/stimuli/E24_Q5_ansL.png", "images/stimuli/E24_Q6_ansL.png", "images/stimuli/E24_Q7_ansR.png", "images/stimuli/E24_Q8_ansR.png", "images/stimuli/E24_Q9_ansL.png", 
"images/stimuli/E25_Q10_ansR.png", "images/stimuli/E25_Q1_ansR.png", "images/stimuli/E25_Q2_ansR.png", "images/stimuli/E25_Q3_ansL.png", "images/stimuli/E25_Q4_ansL.png", "images/stimuli/E25_Q5_ansL.png", "images/stimuli/E25_Q6_ansL.png", "images/stimuli/E25_Q7_ansR.png", "images/stimuli/E25_Q8_ansR.png", "images/stimuli/E25_Q9_ansL.png", 
"images/stimuli/E26_Q10_ansL.png", "images/stimuli/E26_Q1_ansL.png", "images/stimuli/E26_Q2_ansL.png", "images/stimuli/E26_Q3_ansR.png", "images/stimuli/E26_Q4_ansR.png", "images/stimuli/E26_Q5_ansR.png", "images/stimuli/E26_Q6_ansR.png", "images/stimuli/E26_Q7_ansL.png", "images/stimuli/E26_Q8_ansL.png", "images/stimuli/E26_Q9_ansR.png", 
"images/stimuli/E27_Q10_ansL.png", "images/stimuli/E27_Q1_ansL.png", "images/stimuli/E27_Q2_ansL.png", "images/stimuli/E27_Q3_ansR.png", "images/stimuli/E27_Q4_ansR.png", "images/stimuli/E27_Q5_ansR.png", "images/stimuli/E27_Q6_ansR.png", "images/stimuli/E27_Q7_ansL.png", "images/stimuli/E27_Q8_ansL.png", "images/stimuli/E27_Q9_ansR.png", 
"images/stimuli/E28_Q10_ansR.png", "images/stimuli/E28_Q1_ansR.png", "images/stimuli/E28_Q2_ansR.png", "images/stimuli/E28_Q3_ansL.png", "images/stimuli/E28_Q4_ansL.png", "images/stimuli/E28_Q5_ansL.png", "images/stimuli/E28_Q6_ansL.png", "images/stimuli/E28_Q7_ansR.png", "images/stimuli/E28_Q8_ansR.png", "images/stimuli/E28_Q9_ansL.png", 
"images/stimuli/E29_Q10_ansL.png", "images/stimuli/E29_Q1_ansL.png", "images/stimuli/E29_Q2_ansL.png", "images/stimuli/E29_Q3_ansR.png", "images/stimuli/E29_Q4_ansR.png", "images/stimuli/E29_Q5_ansR.png", "images/stimuli/E29_Q6_ansR.png", "images/stimuli/E29_Q7_ansL.png", "images/stimuli/E29_Q8_ansL.png", "images/stimuli/E29_Q9_ansR.png", 
"images/stimuli/E2_Q10_ansL.png", "images/stimuli/E2_Q1_ansL.png", "images/stimuli/E2_Q2_ansR.png", "images/stimuli/E2_Q3_ansR.png", "images/stimuli/E2_Q4_ansL.png", "images/stimuli/E2_Q5_ansL.png", "images/stimuli/E2_Q6_ansL.png", "images/stimuli/E2_Q7_ansR.png", "images/stimuli/E2_Q8_ansR.png", "images/stimuli/E2_Q9_ansL.png", 
"images/stimuli/E30_Q10_ansR.png", "images/stimuli/E30_Q1_ansL.png", "images/stimuli/E30_Q2_ansL.png", "images/stimuli/E30_Q3_ansL.png", "images/stimuli/E30_Q4_ansL.png", "images/stimuli/E30_Q5_ansR.png", "images/stimuli/E30_Q6_ansR.png", "images/stimuli/E30_Q7_ansL.png", "images/stimuli/E30_Q8_ansL.png", "images/stimuli/E30_Q9_ansL.png", 
"images/stimuli/E31_Q10_ansR.png", "images/stimuli/E31_Q1_ansR.png", "images/stimuli/E31_Q2_ansR.png", "images/stimuli/E31_Q3_ansL.png", "images/stimuli/E31_Q4_ansL.png", "images/stimuli/E31_Q5_ansL.png", "images/stimuli/E31_Q6_ansL.png", "images/stimuli/E31_Q7_ansR.png", "images/stimuli/E31_Q8_ansR.png", "images/stimuli/E31_Q9_ansL.png", 
"images/stimuli/E32_Q10_ansL.png", "images/stimuli/E32_Q1_ansL.png", "images/stimuli/E32_Q2_ansL.png", "images/stimuli/E32_Q3_ansR.png", "images/stimuli/E32_Q4_ansR.png", "images/stimuli/E32_Q5_ansR.png", "images/stimuli/E32_Q6_ansR.png", "images/stimuli/E32_Q7_ansL.png", "images/stimuli/E32_Q8_ansL.png", "images/stimuli/E32_Q9_ansR.png", 
"images/stimuli/E33_Q10_ansL.png", "images/stimuli/E33_Q1_ansL.png", "images/stimuli/E33_Q2_ansL.png", "images/stimuli/E33_Q3_ansR.png", "images/stimuli/E33_Q4_ansR.png", "images/stimuli/E33_Q5_ansR.png", "images/stimuli/E33_Q6_ansR.png", "images/stimuli/E33_Q7_ansL.png", "images/stimuli/E33_Q8_ansL.png", "images/stimuli/E33_Q9_ansR.png", 
"images/stimuli/E3_Q10_ansR.png", "images/stimuli/E3_Q1_ansR.png", "images/stimuli/E3_Q2_ansL.png", "images/stimuli/E3_Q3_ansR.png", "images/stimuli/E3_Q4_ansL.png", "images/stimuli/E3_Q5_ansR.png", "images/stimuli/E3_Q6_ansR.png", "images/stimuli/E3_Q7_ansL.png", "images/stimuli/E3_Q8_ansL.png", "images/stimuli/E3_Q9_ansL.png", 
"images/stimuli/E4_Q10_ansR.png", "images/stimuli/E4_Q1_ansL.png", "images/stimuli/E4_Q2_ansL.png", "images/stimuli/E4_Q3_ansL.png", "images/stimuli/E4_Q4_ansL.png", "images/stimuli/E4_Q5_ansR.png", "images/stimuli/E4_Q6_ansR.png", "images/stimuli/E4_Q7_ansR.png", "images/stimuli/E4_Q8_ansR.png", "images/stimuli/E4_Q9_ansL.png", 
"images/stimuli/E5_Q10_ansR.png", "images/stimuli/E5_Q1_ansL.png", "images/stimuli/E5_Q2_ansL.png", "images/stimuli/E5_Q3_ansR.png", "images/stimuli/E5_Q4_ansR.png", "images/stimuli/E5_Q5_ansR.png", "images/stimuli/E5_Q6_ansR.png", "images/stimuli/E5_Q7_ansL.png", "images/stimuli/E5_Q8_ansL.png", "images/stimuli/E5_Q9_ansR.png", 
"images/stimuli/E6_Q10_ansL.png", "images/stimuli/E6_Q1_ansL.png", "images/stimuli/E6_Q2_ansL.png", "images/stimuli/E6_Q3_ansR.png", "images/stimuli/E6_Q4_ansR.png", "images/stimuli/E6_Q5_ansR.png", "images/stimuli/E6_Q6_ansR.png", "images/stimuli/E6_Q7_ansL.png", "images/stimuli/E6_Q8_ansL.png", "images/stimuli/E6_Q9_ansL.png", 
"images/stimuli/E7_Q10_ansR.png", "images/stimuli/E7_Q1_ansL.png", "images/stimuli/E7_Q2_ansL.png", "images/stimuli/E7_Q3_ansR.png", "images/stimuli/E7_Q4_ansR.png", "images/stimuli/E7_Q5_ansR.png", "images/stimuli/E7_Q6_ansR.png", "images/stimuli/E7_Q7_ansL.png", "images/stimuli/E7_Q8_ansL.png", "images/stimuli/E7_Q9_ansR.png", 
"images/stimuli/E8_Q10_ansR.png", "images/stimuli/E8_Q1_ansR.png", "images/stimuli/E8_Q2_ansR.png", "images/stimuli/E8_Q3_ansL.png", "images/stimuli/E8_Q4_ansL.png", "images/stimuli/E8_Q5_ansL.png", "images/stimuli/E8_Q6_ansL.png", "images/stimuli/E8_Q7_ansR.png", "images/stimuli/E8_Q8_ansR.png", "images/stimuli/E8_Q9_ansL.png", 
"images/stimuli/E9_Q10_ansR.png", "images/stimuli/E9_Q1_ansR.png", "images/stimuli/E9_Q2_ansR.png", "images/stimuli/E9_Q3_ansL.png", "images/stimuli/E9_Q4_ansL.png", "images/stimuli/E9_Q5_ansL.png", "images/stimuli/E9_Q6_ansL.png", "images/stimuli/E9_Q7_ansR.png", "images/stimuli/E9_Q8_ansR.png", "images/stimuli/E9_Q9_ansL.png"])


let stim_list = shuffle([shuffle(["E10_Q10_ansR.png", "E10_Q1_ansL.png", "E10_Q2_ansL.png", "E10_Q3_ansL.png", "E10_Q4_ansL.png", "E10_Q5_ansR.png", "E10_Q6_ansR.png", "E10_Q7_ansR.png", "E10_Q8_ansR.png", "E10_Q9_ansL.png"]), 
shuffle(["E11_Q10_ansR.png", "E11_Q1_ansR.png", "E11_Q2_ansR.png", "E11_Q3_ansL.png", "E11_Q4_ansL.png", "E11_Q5_ansL.png", "E11_Q6_ansL.png", "E11_Q7_ansR.png", "E11_Q8_ansR.png", "E11_Q9_ansL.png"]), 
shuffle(["E12_Q10_ansL.png", "E12_Q1_ansL.png", "E12_Q2_ansL.png", "E12_Q3_ansR.png", "E12_Q4_ansR.png", "E12_Q5_ansR.png", "E12_Q6_ansR.png", "E12_Q7_ansL.png", "E12_Q8_ansL.png", "E12_Q9_ansR.png"]), 
shuffle(["E13_Q10_ansL.png", "E13_Q1_ansL.png", "E13_Q2_ansL.png", "E13_Q3_ansR.png", "E13_Q4_ansR.png", "E13_Q5_ansR.png", "E13_Q6_ansR.png", "E13_Q7_ansL.png", "E13_Q8_ansL.png", "E13_Q9_ansR.png"]), 
shuffle(["E14_Q10_ansL.png", "E14_Q1_ansL.png", "E14_Q2_ansL.png", "E14_Q3_ansR.png", "E14_Q4_ansR.png", "E14_Q5_ansR.png", "E14_Q6_ansR.png", "E14_Q7_ansL.png", "E14_Q8_ansL.png", "E14_Q9_ansR.png"]), 
shuffle(["E15_Q10_ansL.png", "E15_Q1_ansL.png", "E15_Q2_ansL.png", "E15_Q3_ansR.png", "E15_Q4_ansR.png", "E15_Q5_ansR.png", "E15_Q6_ansR.png", "E15_Q7_ansL.png", "E15_Q8_ansL.png", "E15_Q9_ansR.png"]), 
shuffle(["E16_Q10_ansR.png", "E16_Q1_ansR.png", "E16_Q2_ansR.png", "E16_Q3_ansL.png", "E16_Q4_ansL.png", "E16_Q5_ansL.png", "E16_Q6_ansL.png", "E16_Q7_ansR.png", "E16_Q8_ansR.png", "E16_Q9_ansL.png"]), 
shuffle(["E17_Q10_ansL.png", "E17_Q1_ansL.png", "E17_Q2_ansL.png", "E17_Q3_ansR.png", "E17_Q4_ansR.png", "E17_Q5_ansR.png", "E17_Q6_ansR.png", "E17_Q7_ansL.png", "E17_Q8_ansL.png", "E17_Q9_ansR.png"]), 
shuffle(["E18_Q10_ansL.png", "E18_Q1_ansL.png", "E18_Q2_ansL.png", "E18_Q3_ansR.png", "E18_Q4_ansR.png", "E18_Q5_ansR.png", "E18_Q6_ansR.png", "E18_Q7_ansL.png", "E18_Q8_ansL.png", "E18_Q9_ansR.png"]), 
shuffle(["E19_Q10_ansL.png", "E19_Q1_ansL.png", "E19_Q2_ansL.png", "E19_Q3_ansR.png", "E19_Q4_ansR.png", "E19_Q5_ansR.png", "E19_Q6_ansR.png", "E19_Q7_ansL.png", "E19_Q8_ansL.png", "E19_Q9_ansR.png"]), 
shuffle(["E1_Q10_ansR.png", "E1_Q1_ansL.png", "E1_Q2_ansL.png", "E1_Q3_ansR.png", "E1_Q4_ansL.png", "E1_Q5_ansR.png", "E1_Q6_ansR.png", "E1_Q7_ansL.png", "E1_Q8_ansR.png", "E1_Q9_ansL.png"]), 
shuffle(["E20_Q10_ansL.png", "E20_Q1_ansL.png", "E20_Q2_ansL.png", "E20_Q3_ansR.png", "E20_Q4_ansR.png", "E20_Q5_ansR.png", "E20_Q6_ansR.png", "E20_Q7_ansL.png", "E20_Q8_ansL.png", "E20_Q9_ansR.png"]), 
shuffle(["E21_Q10_ansL.png", "E21_Q1_ansL.png", "E21_Q2_ansL.png", "E21_Q3_ansR.png", "E21_Q4_ansR.png", "E21_Q5_ansR.png", "E21_Q6_ansR.png", "E21_Q7_ansL.png", "E21_Q8_ansL.png", "E21_Q9_ansR.png"]), 
shuffle(["E22_Q10_ansR.png", "E22_Q1_ansR.png", "E22_Q2_ansR.png", "E22_Q3_ansL.png", "E22_Q4_ansL.png", "E22_Q5_ansL.png", "E22_Q6_ansL.png", "E22_Q7_ansR.png", "E22_Q8_ansR.png", "E22_Q9_ansL.png"]), 
shuffle(["E23_Q10_ansL.png", "E23_Q1_ansL.png", "E23_Q2_ansL.png", "E23_Q3_ansR.png", "E23_Q4_ansR.png", "E23_Q5_ansR.png", "E23_Q6_ansR.png", "E23_Q7_ansL.png", "E23_Q8_ansL.png", "E23_Q9_ansR.png"]), 
shuffle(["E24_Q10_ansR.png", "E24_Q1_ansR.png", "E24_Q2_ansR.png", "E24_Q3_ansL.png", "E24_Q4_ansL.png", "E24_Q5_ansL.png", "E24_Q6_ansL.png", "E24_Q7_ansR.png", "E24_Q8_ansR.png", "E24_Q9_ansL.png"]), 
shuffle(["E25_Q10_ansR.png", "E25_Q1_ansR.png", "E25_Q2_ansR.png", "E25_Q3_ansL.png", "E25_Q4_ansL.png", "E25_Q5_ansL.png", "E25_Q6_ansL.png", "E25_Q7_ansR.png", "E25_Q8_ansR.png", "E25_Q9_ansL.png"]), 
shuffle(["E26_Q10_ansL.png", "E26_Q1_ansL.png", "E26_Q2_ansL.png", "E26_Q3_ansR.png", "E26_Q4_ansR.png", "E26_Q5_ansR.png", "E26_Q6_ansR.png", "E26_Q7_ansL.png", "E26_Q8_ansL.png", "E26_Q9_ansR.png"]), 
shuffle(["E27_Q10_ansL.png", "E27_Q1_ansL.png", "E27_Q2_ansL.png", "E27_Q3_ansR.png", "E27_Q4_ansR.png", "E27_Q5_ansR.png", "E27_Q6_ansR.png", "E27_Q7_ansL.png", "E27_Q8_ansL.png", "E27_Q9_ansR.png"]), 
shuffle(["E28_Q10_ansR.png", "E28_Q1_ansR.png", "E28_Q2_ansR.png", "E28_Q3_ansL.png", "E28_Q4_ansL.png", "E28_Q5_ansL.png", "E28_Q6_ansL.png", "E28_Q7_ansR.png", "E28_Q8_ansR.png", "E28_Q9_ansL.png"]), 
shuffle(["E29_Q10_ansL.png", "E29_Q1_ansL.png", "E29_Q2_ansL.png", "E29_Q3_ansR.png", "E29_Q4_ansR.png", "E29_Q5_ansR.png", "E29_Q6_ansR.png", "E29_Q7_ansL.png", "E29_Q8_ansL.png", "E29_Q9_ansR.png"]), 
shuffle(["E2_Q10_ansL.png", "E2_Q1_ansL.png", "E2_Q2_ansR.png", "E2_Q3_ansR.png", "E2_Q4_ansL.png", "E2_Q5_ansL.png", "E2_Q6_ansL.png", "E2_Q7_ansR.png", "E2_Q8_ansR.png", "E2_Q9_ansL.png"]), 
shuffle(["E30_Q10_ansR.png", "E30_Q1_ansL.png", "E30_Q2_ansL.png", "E30_Q3_ansL.png", "E30_Q4_ansL.png", "E30_Q5_ansR.png", "E30_Q6_ansR.png", "E30_Q7_ansL.png", "E30_Q8_ansL.png", "E30_Q9_ansL.png"]), 
shuffle(["E31_Q10_ansR.png", "E31_Q1_ansR.png", "E31_Q2_ansR.png", "E31_Q3_ansL.png", "E31_Q4_ansL.png", "E31_Q5_ansL.png", "E31_Q6_ansL.png", "E31_Q7_ansR.png", "E31_Q8_ansR.png", "E31_Q9_ansL.png"]), 
shuffle(["E32_Q10_ansL.png", "E32_Q1_ansL.png", "E32_Q2_ansL.png", "E32_Q3_ansR.png", "E32_Q4_ansR.png", "E32_Q5_ansR.png", "E32_Q6_ansR.png", "E32_Q7_ansL.png", "E32_Q8_ansL.png", "E32_Q9_ansR.png"]), 
shuffle(["E33_Q10_ansL.png", "E33_Q1_ansL.png", "E33_Q2_ansL.png", "E33_Q3_ansR.png", "E33_Q4_ansR.png", "E33_Q5_ansR.png", "E33_Q6_ansR.png", "E33_Q7_ansL.png", "E33_Q8_ansL.png", "E33_Q9_ansR.png"]), 
shuffle(["E3_Q10_ansR.png", "E3_Q1_ansR.png", "E3_Q2_ansL.png", "E3_Q3_ansR.png", "E3_Q4_ansL.png", "E3_Q5_ansR.png", "E3_Q6_ansR.png", "E3_Q7_ansL.png", "E3_Q8_ansL.png", "E3_Q9_ansL.png"]), 
shuffle(["E4_Q10_ansR.png", "E4_Q1_ansL.png", "E4_Q2_ansL.png", "E4_Q3_ansL.png", "E4_Q4_ansL.png", "E4_Q5_ansR.png", "E4_Q6_ansR.png", "E4_Q7_ansR.png", "E4_Q8_ansR.png", "E4_Q9_ansL.png"]), 
shuffle(["E5_Q10_ansR.png", "E5_Q1_ansL.png", "E5_Q2_ansL.png", "E5_Q3_ansR.png", "E5_Q4_ansR.png", "E5_Q5_ansR.png", "E5_Q6_ansR.png", "E5_Q7_ansL.png", "E5_Q8_ansL.png", "E5_Q9_ansR.png"]), 
shuffle(["E6_Q10_ansL.png", "E6_Q1_ansL.png", "E6_Q2_ansL.png", "E6_Q3_ansR.png", "E6_Q4_ansR.png", "E6_Q5_ansR.png", "E6_Q6_ansR.png", "E6_Q7_ansL.png", "E6_Q8_ansL.png", "E6_Q9_ansL.png"]), 
shuffle(["E7_Q10_ansR.png", "E7_Q1_ansL.png", "E7_Q2_ansL.png", "E7_Q3_ansR.png", "E7_Q4_ansR.png", "E7_Q5_ansR.png", "E7_Q6_ansR.png", "E7_Q7_ansL.png", "E7_Q8_ansL.png", "E7_Q9_ansR.png"]), 
shuffle(["E8_Q10_ansR.png", "E8_Q1_ansR.png", "E8_Q2_ansR.png", "E8_Q3_ansL.png", "E8_Q4_ansL.png", "E8_Q5_ansL.png", "E8_Q6_ansL.png", "E8_Q7_ansR.png", "E8_Q8_ansR.png", "E8_Q9_ansL.png"]), 
shuffle(["E9_Q10_ansR.png", "E9_Q1_ansR.png", "E9_Q2_ansR.png", "E9_Q3_ansL.png", "E9_Q4_ansL.png", "E9_Q5_ansL.png", "E9_Q6_ansL.png", "E9_Q7_ansR.png", "E9_Q8_ansR.png", "E9_Q9_ansL.png"])])


/* encoding trials */
// function that creates images for encoding phase
function correct_answer(stim) {

    // pick images
    if (stim.includes('L')) {
        answer = 'left'
    } else if (stim.includes('R')) {
        answer = 'right'
    }

    return ({
        answer: answer
    })
}


// encoding
let trials = []
let eventsPerBlock = 3

for (let block = 0; block < stim_list.length / eventsPerBlock; block++) {
    let subArray_trials = []
    let sequence = []

    for (let event = 0; event < eventsPerBlock; event++) {
        sequence.push(...stim_list[block*eventsPerBlock + event])
    }
    for (let trial = 0; trial < stim_list[block].length * eventsPerBlock; trial++) {

        answer = correct_answer(sequence[trial])

        subArray_trials.push(new Data_row({
            time_end: "incomplete",
            practice: block == 0 ? true : false,
            encoding: true,
            block: block,
            trial: trial,
            stim: sequence[trial],
            answer: answer.answer
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
    if (first_img < 7 || (first_img >=10 && first_img < 17) || first_img >=20){
        condition = 'within'
    } else {
        condition = 'between'
    }

    return ({
        left_img: left_img,
        right_img: right_img,
        condition: condition
    })
}


// memory
let mem_trials = []

for (let block = 0; block < stim_list.length / eventsPerBlock; block++) {
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

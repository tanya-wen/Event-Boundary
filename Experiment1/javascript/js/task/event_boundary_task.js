/***

event boundary experiment

***/
// fallback to vanilla timers if eventTimer is not loaded...
if (typeof eventTimer == 'undefined') {
    //console.log("no eventTimer found... using JS setTimeout/Interval")
    var eventTimer = {};
    eventTimer.setTimeout = function (fun, time) {
        window.setTimeout(fun, time)
    }
    eventTimer.setInterval = function (fun, time) {
        window.setInterval(fun, time)
    }
}


const event_boundary_task = function () {

    const init = function () {
        // show load screen
        preLoad.set.onComplete(event_boundary_task.instructions_pg1)

        eventTimer.cancelAllRequests();

        get_info.set_current_task("event_boundary_task")


        // create content display within the main-display div
        document.querySelector("#main-display").style.display = "flex"
        document.querySelector("#main-display").innerHTML = `
                        <div class="content-display flex flex-column justify-center f6 lh-copy" style="text-align: left">
                        </div>`
        //
        load_screen();
        preLoad.loadImages()
    }

    // triggers loading screen
    const load_screen = function () {
        document.querySelector(".content-display").innerHTML = `<div>Loading images...</div><div class="load loader"></div>`
        document.querySelector(".content-display").style.visibility = "visible"
    }


    ////////// INSTRUCTIONS //////////////
    const instructions_pg1 = function () {
        document.querySelector(".content-display").style.visibility = "hidden"
        document.querySelector(".content-display").innerHTML = `
                        <h3> Instructions </h3>
                        <div>
                            <p>In this task you will be asked to make judgements the image, words, math, puzzles, statements, etc. on the center of the screen. 
                            There will be two choices on the bottom left and bottom right. You will use the "Z" and "M" keys to select either the bottom left 
                            or bottom right choice that correctly describes image or answers the question above. </p>

                            <p>We will go through a few examples in the next couple of pages.</p>
                            <div class="flex flex-row">
                                <a id="dyn-bttn" class="bttn b-right f6 link dim ph3 pv2 mb2 dib white bg-dark-gray" href="#0">NEXT</a>
                            </div>
                        </div>
                        `
        document.querySelector("#dyn-bttn").setAttribute("onClick", "javascript: event_boundary_task.instructions_pg2();")
        document.querySelector(".content-display").style.visibility = "visible"
    }

    const instructions_pg2 = function () {
        document.querySelector(".content-display").style.visibility = "hidden"
        document.querySelector(".content-display").innerHTML = `
                        <h3> Instructions </h3>
                        <div>
                            <p>In this example, there is a rock in the middle of the screen. You are asked to press "Z" if it is soft and "M" if it is hard. The correct answer is "M".</p>

                            <div class="standard-display absolute-center">
                                    <img src="images/example-1.png" style="width: 800px"></img>
                            </div>
                            <div class="flex flex-row" style="">
                                <a id="dyn-bttn-2" class="bttn b-left f6 link dim ph3 pv2 mb2 dib white bg-dark-gray" href="#0">PREVIOUS</a>
                                <a id="dyn-bttn" class="bttn b-right f6 link dim ph3 pv2 mb2 dib white bg-green" href="#0">NEXT</a>
                            </div>
                        </div>
                        `
        document.querySelector("#dyn-bttn-2").setAttribute("onClick", "javascript: event_boundary_task.instructions_pg1();")
        document.querySelector("#dyn-bttn").setAttribute("onClick", "javascript: event_boundary_task.instructions_pg3();")
        document.querySelector(".content-display").style.visibility = "visible"
    }

    const instructions_pg3 = function () {
        document.querySelector(".content-display").style.visibility = "hidden"
        document.querySelector(".content-display").innerHTML = `
                        <h3> Instructions </h3>
                        <div>
                            <p>In this example, there is an equation in the middle of the screen . You are asked to press "Z" if it is true and "M" if it is false. The correct answer is "M".</p>

                            <div class="standard-display absolute-center">
                                    <img src="images/example-2.png" style="width: 800px"></img>
                            </div>
                            <div class="flex flex-row" style="">
                                <a id="dyn-bttn-2" class="bttn b-left f6 link dim ph3 pv2 mb2 dib white bg-dark-gray" href="#0">PREVIOUS</a>
                                <a id="dyn-bttn" class="bttn b-right f6 link dim ph3 pv2 mb2 dib white bg-green" href="#0">NEXT</a>
                            </div>
                        </div>
                        `
        document.querySelector("#dyn-bttn-2").setAttribute("onClick", "javascript: event_boundary_task.instructions_pg2();")
        document.querySelector("#dyn-bttn").setAttribute("onClick", "javascript: event_boundary_task.instructions_pg4();")
        document.querySelector(".content-display").style.visibility = "visible"
    }

    const instructions_pg4 = function () {
        document.querySelector(".content-display").style.visibility = "hidden"
        document.querySelector(".content-display").innerHTML = `
                        <h3> Instructions </h3>
                        <div>
                            <p>In this example, there is an word in the middle of the screen . You are asked to press "Z" if it has 2 syllables on and "M" if it has 3 syllables. The correct answer is "Z".</p>

                            <div class="standard-display absolute-center">
                                    <img src="images/example-3.png" style="width: 800px"></img>
                            </div>
                            <div class="flex flex-row" style="">
                                <a id="dyn-bttn-2" class="bttn b-left f6 link dim ph3 pv2 mb2 dib white bg-dark-gray" href="#0">PREVIOUS</a>
                                <a id="dyn-bttn" class="bttn b-right f6 link dim ph3 pv2 mb2 dib white bg-green" href="#0">NEXT</a>
                            </div>
                        </div>
                        `
        document.querySelector("#dyn-bttn-2").setAttribute("onClick", "javascript: event_boundary_task.instructions_pg3();")
        document.querySelector("#dyn-bttn").setAttribute("onClick", "javascript: event_boundary_task.instructions_pg5();")
        document.querySelector(".content-display").style.visibility = "visible"
    }

    const instructions_pg5 = function () {
        document.querySelector(".content-display").style.visibility = "hidden"
        document.querySelector(".content-display").innerHTML = `
                        <h3> Instructions </h3>
                        <div>
                            <p>Your job is to try to answer as accurately as possible. </p>
                            <p>You have up to 3.5 seconds to respond (the display will stay up until the 3.5 seconds is over but only your first response will be counted). </p>

                            <div class="flex flex-row" style="">
                                <a id="dyn-bttn-2" class="bttn b-left f6 link dim ph3 pv2 mb2 dib white bg-dark-gray" href="#0">PREVIOUS</a>
                                <a id="dyn-bttn" class="bttn b-right f6 link dim ph3 pv2 mb2 dib white bg-green" href="#0">NEXT</a>
                            </div>
                        </div>
                        `
        document.querySelector("#dyn-bttn-2").setAttribute("onClick", "javascript: event_boundary_task.instructions_pg4();")
        document.querySelector("#dyn-bttn").setAttribute("onClick", "javascript: event_boundary_task.instructions_pg6();")
        document.querySelector(".content-display").style.visibility = "visible"
    }

    const instructions_pg6 = function () {
        document.querySelector(".content-display").style.visibility = "hidden"
        document.querySelector(".content-display").innerHTML = `
                        <h3> Instructions </h3>
                        <div>
                            <p>Afterwards, you will be given a memory test on the sequence of stimuli shown to you. You will be asked to judge the temporal order and temporal distance of displays. </p>
                            <div class="flex flex-row" style="">
                                <a id="dyn-bttn-2" class="bttn b-left f6 link dim ph3 pv2 mb2 dib white bg-dark-gray" href="#0">PREVIOUS</a>
                                <a id="dyn-bttn" class="bttn b-right f6 link dim ph3 pv2 mb2 dib white bg-green" href="#0">NEXT</a>
                            </div>
                        </div>
                        `
        document.querySelector("#dyn-bttn-2").setAttribute("onClick", "javascript: event_boundary_task.instructions_pg5();")
        document.querySelector("#dyn-bttn").setAttribute("onClick", "javascript: event_boundary_task.instructions_pg7();")
        document.querySelector(".content-display").style.visibility = "visible"
    }

    const instructions_pg7 = function () {
        eventTimer.cancelAllRequests()
        let content = document.querySelector(".content-display")
        content.style.visibility = "hidden"
        content.innerHTML =
            `<h3>Instructions</h3>
            <div>
                <p>That's it! Please use the "previous" and "next" buttons if you'd like to review the instructions</p>
				<p>Before we begin the experimental trials, you will first have to complete 30 practice trials. 
                You must get above 80% (at least 24 trials) of the practice trials correct before you can move on to the experimental trials. 
                This will then be followed by a memory test consisting of 27 trials.
                In the memory test, you must get at least 50% (14 trials) of the temporal order judgements correct to move on to the main experiment. 
                If you do not get achieve the accuracy criteria, you will have to redo the practice trials. </p>
                <p>When you are ready to begin the practice trials, press START. The sequence will begin immediately after pressing START.</p>

                <div class="flex flex-row" style="">
                    <a id="dyn-bttn-2" class="bttn b-left f6 link dim ph3 pv2 mb2 dib white bg-dark-gray" href="#0">PREVIOUS</a>
                    <a id="dyn-bttn" class="bttn b-right f6 link dim ph3 pv2 mb2 dib white bg-green" href="#0">START</a>
                </div>
            </div>
            `
        document.querySelector("#dyn-bttn-2").setAttribute("onClick", "javascript: event_boundary_task.instructions_pg6();")
        document.querySelector("#dyn-bttn").setAttribute("onClick", "javascript: event_boundary_task.start_exp();")
        content.style.visibility = "visible"
    }


    /////////// EXPERIMENT /////////////////

    let block_counter = -1,
        trial_counter = -1,
        mem_trial_counter = -1,
        allow_keys = false,
        time1,
        time2,
        timer,
        mem_timer,
        mainexp_block_acc = 0,
        mainexp_acc = 0,
        practice_acc = 0,
        mem_block_acc = 0,
        mem_main_acc = 0,
        mem_practice_acc = 0



    /* judgement task */
    const start_exp = function () {
        document.addEventListener("keydown", keydown, false)
        document.querySelector("#main-display").innerHTML = `<div class="standard-display absolute-center">/div>`
        fixate_0();
    }


    const fixate_1 = function () {
        allow_keys = false
        document.querySelector("#main-display").innerHTML =
            `<div class="standard-display absolute-center">
                <p style="font-size: 72px">+</p>
            </div>`
        timer = eventTimer.setTimeout(show_choiceDisplay, 1000)
    }


    const fixate_0 = function () {
        // increase our block counter
        block_counter++
        mainexp_block_acc = 0
        mem_block_acc = 0

        allow_keys = false

        document.querySelector("#main-display").innerHTML =
            `<div class="standard-display absolute-center">
                <p style="font-size: 72px">+</p>
            </div>`
        timer = eventTimer.setTimeout(show_choiceDisplay, 1000)
    }


    const show_choiceDisplay = function () {

        // increase our trial counter
        trial_counter++

        // if we reach the maximum number of trials, we end the experiment
        if (block_counter >= trials.length) {

            encoding_score = (100 * mainexp_acc / 300)
            memory_score = (100 * mem_main_acc / 270)
            document.querySelector("#main-display").style.display = "flex"
            document.querySelector("#main-display").innerHTML = `
                        <div class="content-display flex flex-column justify-center f6 lh-copy" style="text-align: left">
                        </div>`
            document.querySelector(".content-display").innerHTML =
                `<div>
                    <div>
                        <p style="font-size: 72px">Your accuracy for the object judgement task is `+ encoding_score.toFixed(2) + `%</p>
                        <p style="font-size: 72px">Your accuracy for the memory order task is `+ memory_score.toFixed(2) + `%</p>
                    <br>
                    </div>
                    <div>
                        <p style="font-size: 14px">Please continue to the next page.</p>
                    </div>
                </div>
                <div class="flex flex-row" style="">
                    <a id="dyn-bttn" class="bttn b-right f6 link dim ph3 pv2 mb2 dib white bg-green" href="#0">NEXT</a>
                </div>`
            document.querySelector("#dyn-bttn").setAttribute("onClick", "javascript: master.next();")
            return;
        }

        // go to distactor task before memory test 
        if (trial_counter == 30) {
            // reset trial_counter
            trial_counter = -1
            mem_trial_counter = -1
            // move on to memory test
            document.querySelector("#main-display").style.visibility = "hidden"
            document.querySelector("#main-display").innerHTML =
                `<div>
                <div class="standard-display absolute-center">
                    <p> + </p>
                </div>
            </div>`
            timer = eventTimer.setTimeout(typing_task, 2000)
            return;
        }


        // otherwise, present trial
        time1 = window.performance.now();
        allow_keys = true

        document.querySelector("#main-display").style.visibility = "hidden"
        document.querySelector("#main-display").innerHTML =
            `<div>
                <div class="standard-display absolute-center">
                    <img src="images/stimuli/` + trials[block_counter][trial_counter].stim + `" style="width: 800px"></img>
                </div>
            </div>`
        document.querySelector("#main-display").style.visibility = "visible"

        timer = eventTimer.setTimeout(target_timeout, 3500)
    }


    const target_timeout = function () {
        allow_keys = false

        document.querySelector("#main-display").innerHTML =
            `<div class="standard-display absolute-center">
            <div>
            <p style="font-size: 36px">Too slow!</p> <br>
            <p style="font-size: 36px">Press the spacebar to continue</p>
            </div>
        </div>
        `
        trials[block_counter][trial_counter].response = "none"
        trials[block_counter][trial_counter].response_time = 0
        trials[block_counter][trial_counter].response_acc = trials[block_counter][trial_counter].response == trials[block_counter][trial_counter].answer

        end_trial()
    }


    const end_trial = function () {
        allow_keys = false

        document.querySelector("#main-display").innerHTML =
            `<div class="standard-display absolute-center">
            <p style="font-size: 72px">+</p>
        </div>
        `
        timer = eventTimer.setTimeout(show_choiceDisplay, 1000)
    }


    const end_practice = function () {
        eventTimer.cancelAllRequests()

        if (practice_acc >= 24 && mem_practice_acc >= 14) {
            // create content display within the main-display div
            document.querySelector("#main-display").style.display = "flex"
            document.querySelector("#main-display").innerHTML = `
                        <div class="content-display flex flex-column justify-center f6 lh-copy" style="text-align: left">
                        </div>`

            document.querySelector(".content-display").style.visibility = "hidden"

            document.querySelector(".content-display").innerHTML = `
                        <h3> Instructions </h3>
                        <div><p>Great! You've completed the practice trials and can move on to the main experiment.</p>
                            <p>The experimental trials will be exactly the same as the practice trials. Please respond as accurately as possible throughout the experiment. </p>
                            <p>When you are ready to begin the experimental trials, press start.</p>
                            <div class="flex flex-row">
                            <a id="dyn-bttn" class="bttn b-right f6 link dim ph3 pv2 mb2 dib white bg-dark-gray" href="#0">START MAIN EXPERIMENT</a>
                        </div>
                        </div>
                        `
            document.querySelector("#dyn-bttn").setAttribute("onClick", "javascript: event_boundary_task.fixate_0();")
            document.querySelector(".content-display").style.visibility = "visible"

        } else {
            redo_practice();
        }
    }


    const redo_practice = function () {
        trial_counter = -1
        block_counter = -1
        practice_acc = 0
        mem_practice_acc = 0



        // create content display within the main-display div
        document.querySelector("#main-display").style.display = "flex"
        document.querySelector("#main-display").innerHTML = `
                        <div class="content-display flex flex-column justify-center f6 lh-copy" style="text-align: left">
                        </div>`

        document.querySelector(".content-display").style.visibility = "hidden"
        document.querySelector(".content-display").innerHTML = `
                        <h3> Instructions </h3>
                        <div><p>You have either not achieved above 80% accuracy during the judgement task or have not achieved above 62.5% in the memory test. Let's practice again just to make sure you have gotten everything clear.</p>
                            <p> During the task, please respond as accurately as possible using the keyboard. Press start to redo the practice trials.</p>
                            <div class="flex flex-row">
                                <a id="dyn-bttn" class="bttn b-right f6 link dim ph3 pv2 mb2 dib white bg-dark-gray" href="#0">START PRACTICE</a>
                            </div>
                        </div>
                        `
        document.querySelector("#dyn-bttn").setAttribute("onClick", "javascript: event_boundary_task.fixate_0();")
        document.querySelector(".content-display").style.visibility = "visible"
    }


    /// on keydown event // added as event listener on init
    let keydown = function (event) {
        console.log(event.keyCode)
        // log key time
        time2 = window.performance.now();
        let key = event.keyCode ? event.keyCode : event.which;

        // prevent backspace from exiting page (maybe?)
        if (event.keyCode == 8) {
            event.preventDefault();
            return;
        }

        // do nothing if allow_keys is false
        if (allow_keys == false) {
            return;
        }

        if (key == 90 | key == 77) {
            eventTimer.cancelRequest(timer)

            responded = true;
            allow_keys = false;

            if (key == 90) {
                trials[block_counter][trial_counter].response = "left"
            } else if (key == 77) {
                trials[block_counter][trial_counter].response = "right"
            }
            trials[block_counter][trial_counter].response_time = time2 - time1
            trials[block_counter][trial_counter].response_acc = trials[block_counter][trial_counter].response == trials[block_counter][trial_counter].answer

            if (trials[block_counter][trial_counter].response == trials[block_counter][trial_counter].answer) {
                practice_acc++
                mainexp_block_acc++
                if (block_counter > 0) {
                    mainexp_acc++
                }
            }

            timer = eventTimer.setTimeout(end_trial, 3500 - trials[block_counter][trial_counter].response_time)
        }
    };


    /* typing task (distactor task) */
    const typing_task = function () {
        string = make_string(shuffle([4, 5, 6])[0])
        document.querySelector("#main-display").innerHTML =
            //class="standard-display absolute-center"
            `<div align="center">
                <div class="standard-display absolute-center">
                    <p style="font-size: 28px"> In this block of the judgement task, you got `+ mainexp_block_acc + ` out of ` + trials[block_counter].length + ` trials correct.</p>
                </div>
                <div id = "typing_task">
                    <p style="font-size: 14px"> To check whether your keyboard is working, please type the text BACKWARDS into the box below. For example, if you see "e5Fg", you should type "gF5e". </p>
                    <p style="font-size: 14px"> The backspace is disabled to prevent accidentally going to the previous page. Please highlight the letters and retype them if you need to delete. </p>
                    <br>
                    <p style="font-size: 24px"> `+ string + `</p>
                    <p> <input name="typing" id="typing" type="text"> </p>
    
                </div>
                <div style="text-align: right">
                    <button id="current-bttn" style="text-align: right" class="button-green">NEXT</button>
                </div>
            </div>`

        document.querySelector("#main-display").style.visibility = "visible";
        document.querySelector("#current-bttn").setAttribute("onClick", "javascript: event_boundary_task.typing_feedback();")
    }

    function make_string(length) {
        var result = '';
        var characters = 'ABCDEFGHJKLMNOPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }

    function reverseString(str) {
        if (str === "") // This is the terminal case that will end the recursion
            return "";

        else
            return reverseString(str.substr(1)) + str.charAt(0);
    }

    const typing_feedback = function () {
        string_ans = reverseString(string)
        if (document.querySelector("#typing").value != string_ans) {
            alert("Please make sure you have typed in the text correctly")
        } else {
            memory_instructions()
        }
    }



    /* memory test */
    // memory order test
    const memory_instructions = function () {
        document.querySelector("#main-display").style.display = "flex"
        document.querySelector("#main-display").innerHTML = `
                    <div class="content-display flex flex-column justify-center f6 lh-copy" style="text-align: left">
                    </div>`
        document.querySelector(".content-display").style.visibility = "hidden"
        document.querySelector(".content-display").innerHTML = `
                    <h3> Instructions </h3>
                    <div><p>We are now going to test your memory on the items you have just seen in this block.</p>
                        <p>On each trial, you will be asked questions about two images from the sequence of images just shown to you. The first question is the "temporal order" judgement, 
                        in which you will need to tell us which image was shown first. Next, you will be asked to judge their "temporal distance", that is how far apart in time were the two images from each other. </p>
                        <p>When you are ready to begin the memory trials, press start.</p>
                        <div class="flex flex-row">
                        <a id="dyn-bttn" class="bttn b-right f6 link dim ph3 pv2 mb2 dib white bg-dark-gray" href="#0">START MEMORY TEST</a>
                    </div>
                    </div>
                    `
        document.querySelector("#dyn-bttn").setAttribute("onClick", "javascript: event_boundary_task.memory_order_test();")
        document.querySelector(".content-display").style.visibility = "visible"
    }


    const memory_order_test = function () {
        mem_trial_counter++

        if (block_counter == 0 && mem_trial_counter == mem_test.length) {
            document.querySelector("#main-display").innerHTML =
                `<div class="standard-display absolute-center">
                    <p style="font-size: 28px"> In this block, you got `+ mem_practice_acc + ` out of ` + mem_test.length + ` trials correct. </p>
                </div>
                `
            timer = eventTimer.setTimeout(end_practice, 2000)
            return;
        }

        // if we finished the tests, go to next block
        if (mem_trial_counter == mem_test.length) {
            // go to next encoding block
            document.querySelector("#main-display").style.display = "flex"
            document.querySelector("#main-display").innerHTML =
                `<div>
                <div class="standard-display absolute-center">
                    <p style="font-size: 28px"> You have completed `+ block_counter + ` out of 10 blocks. </p>
                </div>
                <div class="standard-display absolute-center">
                    <p style="font-size: 28px"> In this block, you got `+ mem_block_acc + ` out of ` + mem_test.length + ` trials correct.</p>
                </div>
                <div class="standard-display absolute-center">
                    <p>You may take a short break before starting the next block. Please do not close this screen. You may take up to five minutes.</p>
                </div>
                <div class="flex flex-row">
                     <a id="dyn-bttn" class="bttn b-right f6 link dim ph3 pv2 mb2 dib white bg-dark-gray" href="#0">CONTINUE TO NEXT BLOCK</a>
                </div>
            </div>`
            document.querySelector("#dyn-bttn").setAttribute("onClick", "javascript: event_boundary_task.fixate_0();")
            return;
        }

        // memory test
        document.querySelector("#main-display").innerHTML =
            //class="standard-display absolute-center"
            `<div align="center">
              <div id = "temporal_order_test">
                <p style="font-size: 36px"> Please select the image that was seen first. </p>
                <br>
                <label>
                    <input type = "radio" name = "temporal order" value = "left">
                    <img id = 'leftImg' src = 'images/stimuli/`+ mem_trials[block_counter][mem_trial_counter].left_image + `' style="width: 400px"></img>
                </label>
                <label>
                    <input type = "radio" name = "temporal order" value = "right">
                    <img id = 'rightImg' src = 'images/stimuli/`+ mem_trials[block_counter][mem_trial_counter].right_image + `' style="width: 400px"></img>
                </label>
              </div>
              <div style="text-align: right">
                  <button id="current-bttn" style="text-align: right" class="button-green">NEXT</button>
             </div>
        </div>`
        document.querySelector("#main-display").style.visibility = "visible";
        mem_timer = window.performance.now();
        // record temporal order judgment response. currently supports changing answer; response finalized upon clicking "next" button.
        let order_judgment = document.getElementsByName("temporal order");
        temporal_order_test.addEventListener('click', function () {
            for (i = 0; i < order_judgment.length; i++) {
                if (order_judgment[i].checked) {
                    mem_trials[block_counter][mem_trial_counter].order_response_time = window.performance.now() - mem_timer; // record RT
                    mem_trials[block_counter][mem_trial_counter].order_response = order_judgment[i].value; // record response
                    console.log(order_judgment[i].value)
                    if (mem_trials[block_counter][mem_trial_counter].answer == order_judgment[i].value) { // record response accuracy
                        mem_trials[block_counter][mem_trial_counter].order_acc = 1;
                        mem_practice_acc++
                        if (block_counter > 0) {
                            mem_main_acc++
                            mem_block_acc++
                        }
                    } else {
                        mem_trials[block_counter][mem_trial_counter].order_acc = 0;
                    }

                    document.querySelector("#current-bttn").setAttribute("onClick", "javascript: event_boundary_task.memory_distance_test();")
                }
            }
        })
    }


    // memory distance test
    const memory_distance_test = function () {

        document.querySelector("#main-display").innerHTML =
            //class="standard-display absolute-center"
            `<div align="center">
              <div>
                <p style="font-size: 36px"> How far apart in time were these images presented? </p>
                <br>
                <img id = 'leftImg' src = 'images/stimuli/`+ mem_trials[block_counter][mem_trial_counter].left_image + `' style="width: 400px"></img>
                <img id = 'rightImg' src = 'images/stimuli/`+ mem_trials[block_counter][mem_trial_counter].right_image + `' style="width: 400px"></img>
                <br>
              </div>
              <div id = "temporal_distance_test" style="font-size: 24px">
                <br>
                <input type = "radio" name = "temporal distance" value = "0"> Very close </input>
                <input type = "radio" name = "temporal distance" value = "1"> Close </input>
                <input type = "radio" name = "temporal distance" value = "2"> Far </input>
                <input type = "radio" name = "temporal distance" value = "3"> Very far </input>
              </div>
              <div style="text-align: right">
                  <button id="current-bttn" style="text-align: right" class="button-green">NEXT</button>
             </div>
        </div>`
        document.querySelector("#main-display").style.visibility = "visible";
        mem_timer = window.performance.now();
        // record temporal distance judgment response. currently supports changing answer; response finalized upon clicking "next" button.
        let distance_judgment = document.getElementsByName("temporal distance");
        temporal_distance_test.addEventListener('click', function () {
            for (i = 0; i < distance_judgment.length; i++) {
                if (distance_judgment[i].checked) {
                    mem_trials[block_counter][mem_trial_counter].distance_response_time = window.performance.now() - mem_timer; // record RT
                    mem_trials[block_counter][mem_trial_counter].distance_response = distance_judgment[i].value; // record response

                    document.querySelector("#current-bttn").setAttribute("onClick", "javascript: event_boundary_task.memory_order_test();")
                }
            }
        })
    }

    return {
        init: init,
        load_screen: load_screen,
        instructions_pg1: instructions_pg1,
        instructions_pg2: instructions_pg2,
        instructions_pg3: instructions_pg3,
        instructions_pg4: instructions_pg4,
        instructions_pg5: instructions_pg5,
        instructions_pg6: instructions_pg6,
        instructions_pg7: instructions_pg7,
        start_exp: start_exp,
        fixate_0: fixate_0,
        fixate_1: fixate_1,
        show_choiceDisplay: show_choiceDisplay,
        target_timeout: target_timeout,
        end_trial: end_trial,
        typing_task: typing_task,
        typing_feedback: typing_feedback,
        memory_instructions: memory_instructions,
        memory_order_test: memory_order_test,
        memory_distance_test: memory_distance_test,
        trials: trials,
        mem_trials: mem_trials
    }

}();

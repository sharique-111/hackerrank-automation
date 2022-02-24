const puppeteer = require("puppeteer");
const codesObj = require("./codes");

const loginLink = "https://www.hackerrank.com/auth/login";
const email = "yastajelmu@vusra.com";
const password = "123457890";

// IFFE -  immediately invoked function expression - hum ek hi jagah pe function likhte hai,ek hi jagah pe declare karte hai aur call 
// aur call bhi ek hi jagah pe karte hai kakakaka...iffe 
(async function () {
    try {
        let browserInstance = await puppeteer.launch({
            headless: false,
            slowMo: true,
            defaultViewport: null,
            args:["--start-maximized"]
        });
        let newTab = await browserInstance.newPage();
        await newTab.goto(loginLink);
        await newTab.type("input[id='input-1']",email,{delay:50});
        await newTab.type("input[type='password']",password,{delay:50});
        await newTab.click("button[data-analytics='LoginPassword']",{delay:50});
        await waitAndClick(".topics-list a[data-attr1='algorithms']",newTab);
        await waitAndClick('input[value="warmup"]',newTab);
        let allChallenges = await newTab.$$(".ui-btn.ui-btn-normal.primary-cta.ui-btn-line-primary.ui-btn-styled",{delay:50});
        console.log("No. of questions",allChallenges.length);
    } catch (error) {
        console.log(error);
    }
})()

async function waitAndClick(selector,cPage) {
    await cPage.waitForSelector(selector);
    let selectorClicked = cPage.click(selector);
    return selectorClicked;
}
// make async function for questionSolver
//With Promises
/*let page;
browserOpen.then(function (browserObj){
    let browserOpenPromise = browserObj.newPage();
    return browserOpenPromise;
}).then(function (newTab){
    page = newTab;
    let hackerRankPromise = newTab.goto(loginLink);
    return hackerRankPromise;
}).then(function (){
    let emailIsEntered = page.type("input[id='input-1']",email,{delay:50});
    return emailIsEntered;
}).then(function (){
    let passwordIsEntered = page.type("input[type='password']",password,{delay:50});
    return passwordIsEntered;
}).then(function (){
    let LoginButtonClicked = page.click("button[data-analytics='LoginPassword']",{delay:50});
    return LoginButtonClicked;
}).then(function (){
    let clickOnAlgoPromise = waitAndClick(".topics-list a[data-attr1='algorithms']",page);
    return clickOnAlgoPromise;
}).then(function (){
    let checkWarmupPromise = waitAndClick('input[value="warmup"]',page); 
    return checkWarmupPromise;
}).then(function (){
    let waitFor3seconds = page.waitFor(3000);
    return waitFor3seconds;
}).then(function (){
    // $- document.querySelector  $$- document.querySelector
    let allChallengesPromise = page.$$(".ui-btn.ui-btn-normal.primary-cta.ui-btn-line-primary.ui-btn-styled",{delay:50}); 
    return allChallengesPromise;
}).then(function (questionArr){
    console.log("Number of questions",questionArr.length);
    let questionWillBeSolved = questionSolver(page,questionArr[0],codesObj.answers[0]);
    return questionWillBeSolved;
})

function waitAndClick(selector,cPage) {
    return new Promise(function (resolve,reject) {
        let waitForModelPromise = cPage.waitForSelector(selector,{ visible: true });
        waitForModelPromise.then(function (){
            let clickModel = cPage.click(selector);
            return clickModel;
        }).then(function () {
            resolve();
        }).catch(function (err) {
            reject();
        })
    })
}
function questionSolver(page,question,answer){
    return new Promise(function (resolve,reject) {
        let questionWillBeClicked = question.click();
        questionWillBeClicked.then(function (){
            let EditorWillBeFocused = waitAndClick(".monaco-editor.no-user-select.vs",page);
            return EditorWillBeFocused;
        }).then(function (){
            return waitAndClick(".checkbox-input",page);
        }).then(function () {
            return page.waitForSelector("textarea.custominput",page);
        }).then(function (){
            return page.type("textarea.custominput",answer,{delay:10})
        }).then(function (){
            let CtrlIsDown = page.keyboard.down('Control');
            return CtrlIsDown;
        }).then(function (){
            let AisPressed = page.keyboard.press('A',{delay:100});
            return AisPressed;
        }).then(function (){
            let XisPressed = page.keyboard.press('X',{delay:100});
            return XisPressed;
        }).then(function (){
            let CtrlIsUp = page.keyboard.up('Control');
            return CtrlIsUp;
        }).then(function (){
            let mainEditorInFocus = waitAndClick(".monaco-editor.no-user-select.vs",page);
            return mainEditorInFocus;
        }).then(function (){
            let CtrlIsDown = page.keyboard.down('Control');
            return CtrlIsDown;
        }).then(function (){
            let AisPressed = page.keyboard.press('A',{delay:100});
            return AisPressed;
        })
        .then(function (){
            let VisPressed = page.keyboard.press('V',{delay:100});
            return VisPressed;
        }).then(function (){
            let CtrlIsDown = page.keyboard.down('Control');
            return CtrlIsDown;
        }).then(function (){
            return page.click('.hr-monaco__run-code',{delay:100});
        }).then(function (){
            return page.click('.hr-monaco-submit',{delay:100})
        }).then(function () {
            resolve();
        }).catch(function (err) {
            reject();
        })
    })
}*/
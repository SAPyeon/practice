const chkall = document.querySelector("#allcheck");
const chk = document.querySelectorAll(".agree");

const agree = {
    check1: false,
    check2: false,
    check3: false,
    check4: false,
    check5: false
};

chk.forEach((i) => i.addEventListener("input", checkbox));
function checkbox(e) {
    const { checked, id } = e.target;
    agree[id] = checked;
    checkAll();
}


function checkAll() {
    const { check1, check2, check3, check4, check5 } = agree;
    if (check1 && check2 && check3 && check4 && check5) {
        chkall.checked = true;
    } else {
        checkall.checked = false;
    }
}

chkall.addEventListener('click', (e) => {
    const { checked } = e.target;
    //console.log(e);
    if (checked) {
        for (let check of chk) {
            check.checked = true;
            agree[check.id] = true;
        }
    } else {
        for (let check of chk) {
            check.checked = false;
            agree[check.id] = false;
        }
    }
})
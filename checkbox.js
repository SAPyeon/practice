const chkall = document.querySelector("#allcheck");
const chk = document.querySelectorAll(".agree");
const checkboxes = document.querySelectorAll(chk.checked);



// chkall.checked = true;
// function defaultchk(a, b) {
//     for (let check of b) {
//         if (a.checked === true) {

//             check.checked = true;

//         } else {
//             check.checked = false;
//         }
//     }
// }
let sum = 0;
function makechk(a, b) {
    for (let check of b) {
        a.addEventListener('change', function () {
            if (a.checked === true) {
                check.checked = true;

            } else {
                check.checked = false;

            }
        })

        check.addEventListener('change', function (e) {
            if (check.checked === false) {
                a.checked = false;
            }
        })


    }

}

//defaultchk(chkall, chk);
makechk(chkall, chk);

const chkall2 = document.querySelector('#check5');
const chk2 = document.querySelectorAll('.agree2')

chkall.addEventListener('change', function () {
    if (chkall.checked === true) {
        chkall2.checked = true;

    }
})

//defaultchk(chkall2, chk2);
// makechk(chkall2, chk2);

// for (let value of chk2) {
//     if (value.checked === false) {
//         chkall2.checked = false;
//     } else {
//         chkall2.checked = true;
//     }
// }


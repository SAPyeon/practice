$(document).ready(function () {
    // 1. 쇼핑몰 상품 갯수설정 // 숫자로 가져오기 위해 parseInt()하기
    $("#plus").on("click", function () {
        var quantity = $("#num").val()
        var sum = parseInt(quantity) + 1
        $("#num").val(sum);
    })
    $("#minus").on("click", function () {
        var sum = parseInt($("#num").val()) - 1
        if (parseInt($("#num").val()) === 1) {
            $("#num").val(1);
        } else
            $("#num").val(sum);
    })

    // 2.취미 선택,폼
    // 변수는 하나만 가지고 있어야 하므로 여러 변수를 가지는 checkbox에는 변수에 값을 저장하지 않고 배열에 저장시킨다.
    // 속성선택자: 속성을 가지고 불러오는 것, 태그명[속성=값] -> 사용자가 어떠한 항목을 체크했는지 여부를 파악
    // $("input:checkbox[name=hobby]:checked"); // input태그에 checkbox에 이름이 hobby인
    // 것 중에서 체크된 것만
    // .each(function)은 선택자의 갯수만큼 반복할 때 사용
    // $(this): 사용자가 선택한 것에 대한 값을 가져올 때 사용 만약 this를 사용하지 않을 경우 맨 먼저 체크된 것만 우선
    // 적용하여 나머지 값이 안나올 수 있다.
    // 자바스크립트 innerHTML="text" 은 jquery에서 html("text")으로 만든다.
    $("#btn_result").on("click", function () {
        // var str = "";
        // 이름이 hobby인 체크박스의 체크되어있는 것 갯수만큼 반복한다.
        // $("input:checkbox[name='hobby']:checked").each(function () {
        //     // console.log($(this).val())
        //     str += "<h1>" + $(this).val() + "</h1>"
        //     console.log(str);
        //     // html에 <div id="result">사이에 <h1>체크된값</h1>을 넣어줌 => html은 h1태그로 인식함
        //     // 만약 html()대신 text()를 사용할 경우 문자 자체로 인식함
        //     $("#result").html(str)
        // });
        // 번외) 체크된 값 나열하기
        var str = ""
        $("input:checkbox[name='hobby']:checked").each(function (index) {
            var chk = $(this).val()
            str += chk
            $("#result").html(str)
        })
    })

    // 3.글자수 세기 -keyup이벤트: 키보드를 누를때마다 나타나는 이벤트
    $("#text").on("keyup", function () {
        //length:앞에 배열이 오면 배열의 길이를, 문자가 앞에 오면 문자의 길이를 나타냄
        $("#text_length").html($(this).val().length)
    })

    // 4.합계구하기
    $("#btn_sum").on("click", function () {
        sum = Number($("#num1").val()) + Number($("#num2").val());
        $("#sum").val(sum);
    })

    // 5.셀렉트박스
    $("#selectbox").on("change", function () {
        var price = $("#num3").val()
        var quantity = $("#selectbox option:selected").val()
        var sum2val = price * quantity
        $("#sum2").text(sum2val)
    })
    $("#num3").on("input", function () {
        var price = $("#num3").val()
        var quantity = $("#selectbox option:selected").val()
        var sum2val = price * quantity
        $("#sum2").text(sum2val)
    })

    // 6.체크박스 합계
    $("#btn_sum3").on("click", function () {
        var price = 0;
        $("input:checkbox[name='price']:checked").each(function (index) {
            var sum = $(this).val()
            price += parseInt(sum)
            $("#sum3").text(price)
        })

    })

    // 7.로그인 유효성 검사
    // onsubmit은 버튼을 눌러 폼을 제출할 때 사용, return false는 폼이 제출해서 다른 페이지로 제출되지 못하게 하는
    // 것임.
    $("#form_login").on("submit", function () {
        if ($("#loginId").val() === '') {
            $("#error_id").html("아이디를 입력하세요");
            return false;
        } else if ($("#loginPw").val() === '') {
            $("#error_pw").html("비밀번호를 입력하세요");
            return false;
        }
    })
    //+)글자수 100자 제한하기
    $("#text2").on("keyup", function () {
        const length = $(this).val().length
        $("#text_length2").html(length + "/100");
        if (length > 100) {
            $(this).val($(this).val().substring(0, 100))
            alert("100자를 초과했습니다.")
            $("#text_length2").html("100/100");
        }
    })

})

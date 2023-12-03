document.querySelector("#pw").addEventListener('blur', (e) => {
  const regexps = [/^.{8,12}$/, /[a-zA-Z]/i, /[0-9]/, /[!@#$%^&*()]/]; // 특수문자 포함조건 적을때 처음에 ^쓰지말기
  const value = e.target.value;

  // 문자 8 ~ 12자리
  if(!regexps[0].test(value)) {
      alert('비밀번호는 8 ~ 12자리여야 합니다.');
      return;
  }
  // 영문자포함
  if(!regexps[1].test(value)) {
      alert('비밀번호는 영문자를 하나이상 포함해야 합니다.');
      return;
  }
  // 숫자포함
  if(!regexps[2].test(value)) {
      alert('비밀번호는 숫자를 하나이상 포함해야 합니다.');
      return;
  }
  // 특수문자(!@#$%^&*())포함
  if(!regexps[3].test(value)) {
      alert('비밀번호는 특수문자(!@#$%^&*())를 하나이상 포함해야 합니다.');
      return;
  }

});

const regExpTest = (regExp, el, msg) => {
    if (regExp.test(el.value)) {
        return true;
    } else {
        alert(msg);
        el.value = "";
        el.focus();
        return false;
    }
};

document.querySelector("#userId").addEventListener('blur', (e) => {
    const regExp1 = /^[a-z][a-z\d]{4,12}$/;
    const regExp2 = /[0-9]/;
    const userId = e.target;
    
    if(!regExpTest(regExp1, userId, "아이디는 영소문자로 시작하는 4~12글자입니다."))
        return false;
    
    if(!regExpTest(regExp2, userId, "아이디는 숫자를 하나이상 포함하세요."))
        return false;
});

document.getElementById('memberFrm').onsubmit = () => {
    alert('가입성공😉');
};
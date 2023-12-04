const renderMembers = () => {
const members = JSON.parse(localStorage.getItem("members"));
console.log(members);
    document.querySelector("table#members tbody").innerHTML =
    members.reduce((html, {id, tel, createdAt}) => {
        return `
            ${html}
            <tr>
                <td>${id}</td>
                <td>${tel}</td>
                <td>${convertToDateTime(createdAt)}</td>
                </tr>`;
    }, "");
};

const f = (n) => n < 10 ? '0' + n : n;
const convertToDateTime = (millis) => {
    const d = new Date(millis);
    const mm = f(d.getMonth() + 1);
    const dd = f(d.getDate());
    const hh = f(d.getHours());
    const mi = f(d.getMinutes());
    return `${mm}/${dd} ${hh}:${mi}`;
};

// 페이지 로딩시 출력
renderMembers();
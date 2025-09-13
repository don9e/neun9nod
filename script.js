// 토글 버튼 선택
const toggleButton = document.getElementById('toggle-color');

// 모든 버튼 선택
const buttons = document.querySelectorAll('.button-group button, #toggle-color');

// 클릭 이벤트
toggleButton.addEventListener('click', () => {
    const body = document.body;

    // 현재 배경색 확인
    const isWhite = body.style.backgroundColor === 'rgb(255, 255, 255)';

    if (isWhite) { // 흰색 → 초록
        body.style.backgroundColor = 'rgb(0, 128, 0)'; // 배경 초록
        body.style.color = 'white';                   // 본문 글씨 흰색

        buttons.forEach(button => {
            button.style.backgroundColor = 'rgb(0, 128, 0)'; // 버튼 배경 = 페이지 배경
            button.style.color = 'white';                     // 버튼 글씨 = 페이지 글씨
            button.style.border = '1px solid white';         // 버튼 테두리 = 페이지 글씨
        });
    } else { // 초록 → 흰색
        body.style.backgroundColor = 'rgb(255, 255, 255)'; // 배경 흰색
        body.style.color = 'rgb(0, 128, 0)';               // 본문 글씨 초록

        buttons.forEach(button => {
            button.style.backgroundColor = 'rgb(255, 255, 255)'; // 버튼 배경 = 페이지 배경
            button.style.color = 'rgb(0, 128, 0)';               // 버튼 글씨 = 페이지 글씨
            button.style.border = '1px solid rgb(0, 128, 0)';    // 버튼 테두리 = 페이지 글씨
        });
    }
});




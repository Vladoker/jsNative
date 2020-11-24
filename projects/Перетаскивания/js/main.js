document.addEventListener("DOMContentLoaded", () => {
    const balls = document.querySelectorAll(".ball");


    balls.forEach(ball => {
        let click = false;
        ball.addEventListener("mousedown", () => {
            // console.log("Кнопка Зажата");
            click = true;
            document.body.addEventListener("mousemove", (e) => {
                // console.log(`перемещяемся x = ${e.pageX} y = ${e.pageY}`);
                if (click) {
                    ball.style.position = "absolute";
                    ball.style.top = `${e.pageY - (ball.offsetHeight/2)}px`;
                    ball.style.left = `${e.pageX - (ball.offsetWidth/2)}px`;
                }
            });
            ball.addEventListener("mouseup", () => {
                // console.log("Кнопка Отжата");
                click = false;
            });
        });
    });
})


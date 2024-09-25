import "lib/styles/components/Questions.scss";
import * as SVG from "lib/svg";
function Questions() {
    return ( 
        <section className="Questions background-decor">
            <h2>Часто задаваемые вопросы</h2>
            <Question
                headline={"Первый вопрос"}
                text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa mi aliquet eu interdum eu pellentesque amet, fermentum hendrerit. Nunc hendrerit nec risus adipiscing lacus, lobortis lectus cursus nunc. Id pellentesque dapibus eu tincidunt dui id tortor, porttitor. Tincidunt nunc praesent euismod in nisl, tellus suspendisse morbi nam. Egestas eget erat malesuada gravida. Et enim integer quam orci, cursus tincidunt mauris, sit. "}/>
                <Question
                headline={"Второй вопрос"}
                text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa mi aliquet eu interdum eu pellentesque amet, fermentum hendrerit. Nunc hendrerit nec risus adipiscing lacus, lobortis lectus cursus nunc. Id pellentesque dapibus eu tincidunt dui id tortor, porttitor. Tincidunt nunc praesent euismod in nisl, tellus suspendisse morbi nam. Egestas eget erat malesuada gravida. Et enim integer quam orci, cursus tincidunt mauris, sit. "}/>
                <Question
                headline={"Третий вопрос"}
                text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa mi aliquet eu interdum eu pellentesque amet, fermentum hendrerit. Nunc hendrerit nec risus adipiscing lacus, lobortis lectus cursus nunc. Id pellentesque dapibus eu tincidunt dui id tortor, porttitor. Tincidunt nunc praesent euismod in nisl, tellus suspendisse morbi nam. Egestas eget erat malesuada gravida. Et enim integer quam orci, cursus tincidunt mauris, sit. "}/>
                <Question
                headline={"Четвертый вопрос"}
                text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa mi aliquet eu interdum eu pellentesque amet, fermentum hendrerit. Nunc hendrerit nec risus adipiscing lacus, lobortis lectus cursus nunc. Id pellentesque dapibus eu tincidunt dui id tortor, porttitor. Tincidunt nunc praesent euismod in nisl, tellus suspendisse morbi nam. Egestas eget erat malesuada gravida. Et enim integer quam orci, cursus tincidunt mauris, sit. "}/>
        </section>
     );
}


function Question({headline, text}) {
    return (
        <details className="Question">
            <summary className="Question-topBar">
                <h2>{headline}</h2>
                <SVG.Decor/>
            </summary>
            <p className="Question_text">
                {text}
            </p>
        </details>
    )
}

export default Questions;
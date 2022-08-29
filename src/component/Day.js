import dummy from "../db/data.json";
import { useParams } from "react-router-dom";

export default function Day() {
    const day = useParams().day;
    const wordList = dummy.words.filter(word => ( word.day === Number(day)))

    return (
        <>
        <h2>Day {day}</h2>
        <table className="word_list">
            <tbody>
                {wordList.map(word => (
                <tr key={word.id}>
                    <td>{word.eng}</td>
                    <td>{word.kor}</td>
                </tr>
                ))}
            </tbody>
        </table>
        </>
    )
}
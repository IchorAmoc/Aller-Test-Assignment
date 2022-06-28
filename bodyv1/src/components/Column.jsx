import { Loading } from "./Loading"
import { Article } from "./Article"

export const Column = ({ data }) => {

    if (!data) return <Loading />
    return (
        <div className={data.columns.length >= 3 ? "articleColumn longer" : "articleColumn shorter"}>
            {data.columns.map((article, x) => (
                <Article data={article} key={`article ${x}`} />
            ))}
        </div>
    )
}
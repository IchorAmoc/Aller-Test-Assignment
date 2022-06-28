import { Loading } from "./Loading"
import { Article } from "./Article"

export const Column = ({ data }) => {

    if (!data) return <Loading />
    return (
        <div className="articleColumn">
            {data.columns.map((article, x) => (
                <Article data={article} key={`article ${x}`} />
            ))}
        </div>
    )
}
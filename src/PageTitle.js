import { useEffect } from "react";

const PageTitle = ({ title, children }) => {
    useEffect(() => {
        document.title = `${title} | JM Software Ltd.`
    }, [title]);

    return children
}

export default PageTitle;
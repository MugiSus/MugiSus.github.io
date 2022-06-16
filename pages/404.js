import ErrorMessage from "../components/errorMessage.js"

const ErrorPage = () => (
    <ErrorMessage statusCode={404} title={"Not Found"} message={"This page could not be found."} />
)

export default ErrorPage;
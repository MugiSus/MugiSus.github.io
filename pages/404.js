import ErrorMessage from "../components/errorMessage.js"

const ErrorPage = () => (
    <ErrorMessage statusCode={404} title={"Not Found"} message={"The page you were looking for does not exist."} />
)

export default ErrorPage;
import ErrorMessage from "../components/errorMessage.js"

const ErrorPage = () => (
    <ErrorMessage statusCode={500} title={"Internal Server Error"} message={"An internal server error occurred."} />
)

export default ErrorPage;
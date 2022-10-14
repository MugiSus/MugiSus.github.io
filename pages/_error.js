import ErrorMessage from "../components/errorMessage.js"

const ErrorPage = ({ statusCode }) => (
    <ErrorMessage statusCode={statusCode} title={`${statusCode} Error`} message={"An error occurred."} />
)

export default ErrorPage;
import { useRouteError } from "react-router-dom"

const ErrorElement = () => {
    const error = useRouteError();
    console.log(error);
  return (
    <h4 className="text-4xl font-bold">there was an error...  {error}</h4>
  )
}

export default ErrorElement
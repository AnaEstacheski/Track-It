import ReactDOM from 'react-dom'
import App from './components/App'
import { AuthProvider } from "./aux/auth"

ReactDOM.render(
    <AuthProvider>
        <App />
    </AuthProvider>,
    document.querySelector('.root')
);
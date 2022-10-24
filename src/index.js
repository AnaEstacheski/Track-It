import ReactDOM from 'react-dom'
import App from './components/App'
import { AuthProvider } from "./providers/userData"

ReactDOM.render(
    <AuthProvider>
        <App />
    </AuthProvider>,
    document.querySelector('.root')
);
import ReactDOM from 'react-dom'
import App from './components/App'
import { AuthProvider } from "./providers/userData"
import { ProgressProvider } from "./providers/userProgress"
import { HabitProvider } from "./providers/userHabit"

ReactDOM.render(
    <AuthProvider>
        <ProgressProvider>
            <HabitProvider>
                <App />
            </HabitProvider>
        </ProgressProvider>
    </AuthProvider>,
    document.querySelector('.root')
);
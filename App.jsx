import {AuthProvider} from './context/AuthContext.jsx';import {ToastProvider} from './components/common/ui.jsx';import AppRoutes from './routes/AppRoutes.jsx';
export default function App(){return <AuthProvider><ToastProvider><AppRoutes/></ToastProvider></AuthProvider>}

import { SnackbarProvider } from 'notistack';

const SnackbarProviders = ({children} :any) => {
  return (
    <SnackbarProvider>
      {children}
    </SnackbarProvider>
  )
}

export default SnackbarProviders

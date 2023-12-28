export const NotFoundPage = (): JSX.Element => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
    <div className="text-center">
      <h1 className="text-6xl font-bold text-gray-300">404</h1>
      <p className="text-xl font-medium text-gray-300">Страница не найдена</p>
      <p className="mt-4 text-md text-gray-300">
        Извините, мы не можем найти страницу, которую вы ищете.
      </p>
      <a href="/" className="btn btn-primary">
        Вернуться на главную
      </a>
    </div>
</div>
  )
}
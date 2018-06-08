defmodule ReactPhoenixWeb.Router do
  use ReactPhoenixWeb, :router

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/api", ReactPhoenixWeb do
    pipe_through :api
  end
end

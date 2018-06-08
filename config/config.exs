# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.
use Mix.Config

# General application configuration
config :react_phoenix,
  ecto_repos: [ReactPhoenix.Repo]

# Configures the endpoint
config :react_phoenix, ReactPhoenixWeb.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "2VDGSXwsXqXnmUnbZbi4mh2KivMkVvPsjof0hC0fGTKEGfj3/d8DjxZFjovwWe93",
  render_errors: [view: ReactPhoenixWeb.ErrorView, accepts: ~w(json)],
  pubsub: [name: ReactPhoenix.PubSub,
           adapter: Phoenix.PubSub.PG2]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env}.exs"

use Mix.Releases.Config,
    # This sets the default release built by `mix release`
    default_release: :default,
    # This sets the default environment used by `mix release`
    default_environment: :dev

# For a full list of config options for both releases
# and environments, visit https://hexdocs.pm/distillery/configuration.html


# You may define one or more environments in this file,
# an environment's settings will override those of a release
# when building in that environment, this combination of release
# and environment configuration is called a profile

environment :dev do
  set dev_mode: true
  set include_erts: false
  set cookie: :"t,`.71}2!ADo{STj$km^XM(c}>@6xb[@_6SPh<]EwUsGJ6wr=vr9Up9P3!}iVH0)"
end

environment :prod do
  set include_erts: true
  set include_src: false
  set cookie: :"u,Iuk%aQ?<X8LAW1?zVsY}c]`G=N0A=cUtfNF>8x5`=)wm.XglTa8zAj`=Qy,W`4"
end

# You may define one or more releases in this file.
# If you have not set a default release, or selected one
# when running `mix release`, the first release in the file
# will be used by default

release :react_phoenix do
  set version: current_version(:react_phoenix)
end


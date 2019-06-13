# Ruby/on Rails

* [Ruby/on Rails](#rubyon-rails)
  * [Linting violations](#linting-violations)
  * [Local application profiling](#local-application-profiling)
  * [Application logging](#application-logging)
  * [Exception tracking](#exception-tracking)

## Linting violations

When running `rubocop`, style related linting violations are those that are flagged when running against `Style`, `Layout` and `Lint` cop departments.

```
rubocop --only Style,Layout,Lint
```

Complexity related linting violations are those that are non-style related:

```
rubocop --except Style,Layout,Lint
```

## Local application profiling

Use `rack-mini-profiler` gem and ensure it's only included in the `:development` bundler group for app.

Example Rack profiler configuration (`config/initializers/rack_profiler.rb`):

```ruby
if Rails.env.development?
  require "rack-mini-profiler"

  Rack::MiniProfilerRails.initialize!(Rails.application)
end
```

## Application logging

* Use `remote_syslog_logger` gem for the main application logging to Papertrail.
* If using infrastructure setup specifically for project, use a log file and `remote_syslog2` to capture, with:
  * [ ] 14 day retention
  * [ ] Daily rotation
* Otherwise use PaaS integration with Papertrail to capture workers
  * [ ] Background workers confirmed to be logging
* `lograge` gem installed and enabled for all non-development environments

Main application example configuration (for example, within `config/environments/production.rb`):

```ruby
config.log_level = :info
config.logger = ActiveSupport::TaggedLogging.new(RemoteSyslogLogger.new('logs.papertrailapp.com', 12345, program: "rails-#{Rails.env}"))
config.log_tags = [:env, :subdomain, lambda { |r| r.cookies['_tpms_session'] }, :uuid]
config.log_formatter = ::Logger::Formatter.new
config.lograge.enabled = true
```

Background worker example configuration (`config/initializers/delayed_job.rb`):

```ruby
Delayed::Worker.logger = Logger.new(Rails.root.join('log', "jobs-#{Rails.env}.log"), 14, 'daily')
```

## Exception tracking

Use the `sentry-raven` gem.

Additional data can be sent to Sentry when an exception is captured by using `Raven.user_context`. A simple integration with this is as following in `ApplicationController.rb`:

```ruby
class ApplicationController < ActionController::Base
  ...
  before_action :set_raven_context
  ...

  def set_raven_context
    context = { request_uuid: request.uuid }

    Raven.user_context(context)
  end
end
```

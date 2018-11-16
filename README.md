# Productionisation in Made Tech

Productionisation, or "to be production ready" is not something easy to achieve. We aim to define what is needed to consider a project "production ready".

## Maintainability

The SRE team at Made Tech have created a checklist that they use to evaluate the new projects for their readiness to be maintained.

We evaluate the projects in the following areas:

- Testability
- Availability of different environments
- Database durability
- Continuous Delivery Pipeline
- Logging
- Infrastructure monitoring
- Dependency upgrade and Vulnerability alerts

In addition to these requirements, we also expect projects to use source control management, provide a mechanism to seed the local database environment and adhere to our standards (RFCS) for areas such as `Makefiles` and code editor defaults.

The full checklist can be seen here: [`maintainability.md`][link_maintainability].

## License

Attribution-ShareAlike 4.0 International: The licensor permits others to copy, distribute, display, and perform the work. In return, licensees must give the original author credit. See [`LICENSE.txt'](LICENSE.txt).

## Copyright

Made Tech 2018 &copy;

[link_maintainability]: /maintainability.md

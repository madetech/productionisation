# The Made Tech Productionisation Checklist

The SRE team at Made Tech have created a checklist that they use to evaluate the new projects for their readiness to be productionised.

We evaluate the projects in the following areas:

- Testability
- Availability of different environments
- Database durability
- Continuous Delivery Pipeline
- Logging
- Infrastructure monitoring
- Dependency upgrade and Vulnerability alerts

In addition to these requirements, we also expect projects to use source control management, provide a mechanism to seed the local database environment and adhere to our standards (RFCS) for areas such as `Makefiles` and code editor defaults.

The full checklist can be seen here: [`PRODUCTIONISATION.md`][link_productionisation].

## Why does this list exists?

We believe that following this list will encourage teams to consistently follow best practices and improve their projects, which would lead to making a greater impact by delivering faster and learning more.

## How to apply this to your project
  1. Copy the checklist for your project - new tab in the [spreadsheet][spreadsheet].
  2. Continuously update the checklist, at least once a month.
  3. Provide feedback, addition and removal of points to the Chalet.

### Granularity
  Each project that has a unique set of staff/team members, instances and stack, should have its own checklist.

### Definition of Done
  Once you’re comfortable that you have satisfied the criteria, tick the box. If you’re on the fence, don’t.

## How to measure success
We measure success by considering the following points:

### Improving the reliability of applications for users

#### Outcomes
  - All teams tracking positive progress on checklist
  - Low level of bugs being reported
  - Customers perceive our applications to be reliable
  - User perceive our applications to be reliable

#### When will we review
  - Monthly p15n check-in during Learn Tech before quarterly update

#### What do we want to see
  - See >5% improvement per month per application
  - Positive feedback regarding low level of bugs when interviewing delivery managers
  - Positive review from customer from delivery managers

### Customers are aware of productionisation best practices and can see the quality we bake into applications

#### Outcomes
  - Delivery managers are reporting on p15n checklist in their fortnightly reports
  - Product owner actively promoting the reliability of our applications and the quality we bake in
  - Customers can easily understand items in the p15n checklist

#### When will we review
  - Monthly p15n check-in during Learn Tech before quarterly update

#### What do we want to see
  - Every fortnightly report includes p15n checklist
  - Delivery manager able to point to the prioritisation of improving p15n checklist
  - Positive interview with customer regarding their understanding of p15n

## License

Attribution-ShareAlike 4.0 International: The licensor permits others to copy, distribute, display, and perform the work. In return, licensees must give the original author credit. See [`LICENSE.txt'](LICENSE.txt).

## Copyright

Made Tech 2019 &copy;

[link_productionisation]: /PRODUCTIONISATION.md
[spreadsheet]: https://docs.google.com/spreadsheets/d/1HRJ2SENxAnKmk66Xo6KIqRcJf6EHJqjAdpHJ3IouhyM/edit#gid=260137935

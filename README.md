## OpenAPI Generation with NestJS PoC

Check the specification file in `specification/xash-v1.yaml`
Custom mustache templates to follow our conventions are defined under `api-generation/templates`
Override and configuration of the default nestjs generator is present under `api-generation/openapi-generator.yaml`.

To generate the server stubs, run:

```
yarn run generate-stubs
```

This will generate server stubs, and models in `build/generated`. The overall layout and proposed
workflow is:

1. Create the service spec in `xash-v1.yaml` and then generate the stubs using `yarn run generate-stubs`
2. In the main module required for nestjs initialization, one can directly provider `Controllers` as
   imported from `@slash-spec/api/api-index`. (Check file `app.module.ts` for an example)
3. The generated files include a `Controller` per defined service and a `Switch` per defined service. Since
   we cannot use nest annotations on an interface, we are creating a `Controller` which then calls a `Switch`
   with the exact same signature. The `Switch` is an interface and can hence be provided to the dependency
   injection container.
4. Add your own implementation for the various switches that are generated, and then add them in the `providers`
   directory for the `@Module` (check `app.module.ts` for an example).
5. For implementations, check files under `src/services/*`.

Pending items:

1. Currently the code being generated does not take into account headers, query params, URL params etc. This, however,
   should be trivial to add.



/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model SajuRecord
 * 
 */
export type SajuRecord = $Result.DefaultSelection<Prisma.$SajuRecordPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const SajuType: {
  DAILY_NORMAL: 'DAILY_NORMAL',
  NEW_YEAR: 'NEW_YEAR'
};

export type SajuType = (typeof SajuType)[keyof typeof SajuType]

}

export type SajuType = $Enums.SajuType

export const SajuType: typeof $Enums.SajuType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more SajuRecords
 * const sajuRecords = await prisma.sajuRecord.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more SajuRecords
   * const sajuRecords = await prisma.sajuRecord.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.sajuRecord`: Exposes CRUD operations for the **SajuRecord** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SajuRecords
    * const sajuRecords = await prisma.sajuRecord.findMany()
    * ```
    */
  get sajuRecord(): Prisma.SajuRecordDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.4.1
   * Query Engine version: 55ae170b1ced7fc6ed07a15f110549408c501bb3
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    SajuRecord: 'SajuRecord'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "sajuRecord"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      SajuRecord: {
        payload: Prisma.$SajuRecordPayload<ExtArgs>
        fields: Prisma.SajuRecordFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SajuRecordFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SajuRecordPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SajuRecordFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SajuRecordPayload>
          }
          findFirst: {
            args: Prisma.SajuRecordFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SajuRecordPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SajuRecordFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SajuRecordPayload>
          }
          findMany: {
            args: Prisma.SajuRecordFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SajuRecordPayload>[]
          }
          create: {
            args: Prisma.SajuRecordCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SajuRecordPayload>
          }
          createMany: {
            args: Prisma.SajuRecordCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SajuRecordCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SajuRecordPayload>[]
          }
          delete: {
            args: Prisma.SajuRecordDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SajuRecordPayload>
          }
          update: {
            args: Prisma.SajuRecordUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SajuRecordPayload>
          }
          deleteMany: {
            args: Prisma.SajuRecordDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SajuRecordUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SajuRecordUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SajuRecordPayload>[]
          }
          upsert: {
            args: Prisma.SajuRecordUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SajuRecordPayload>
          }
          aggregate: {
            args: Prisma.SajuRecordAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSajuRecord>
          }
          groupBy: {
            args: Prisma.SajuRecordGroupByArgs<ExtArgs>
            result: $Utils.Optional<SajuRecordGroupByOutputType>[]
          }
          count: {
            args: Prisma.SajuRecordCountArgs<ExtArgs>
            result: $Utils.Optional<SajuRecordCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    sajuRecord?: SajuRecordOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model SajuRecord
   */

  export type AggregateSajuRecord = {
    _count: SajuRecordCountAggregateOutputType | null
    _avg: SajuRecordAvgAggregateOutputType | null
    _sum: SajuRecordSumAggregateOutputType | null
    _min: SajuRecordMinAggregateOutputType | null
    _max: SajuRecordMaxAggregateOutputType | null
  }

  export type SajuRecordAvgAggregateOutputType = {
    id: number | null
    version: number | null
  }

  export type SajuRecordSumAggregateOutputType = {
    id: number | null
    version: number | null
  }

  export type SajuRecordMinAggregateOutputType = {
    id: number | null
    publicID: string | null
    type: $Enums.SajuType | null
    version: number | null
    createdAt: Date | null
    userPublicID: string | null
  }

  export type SajuRecordMaxAggregateOutputType = {
    id: number | null
    publicID: string | null
    type: $Enums.SajuType | null
    version: number | null
    createdAt: Date | null
    userPublicID: string | null
  }

  export type SajuRecordCountAggregateOutputType = {
    id: number
    publicID: number
    data: number
    type: number
    version: number
    createdAt: number
    userPublicID: number
    _all: number
  }


  export type SajuRecordAvgAggregateInputType = {
    id?: true
    version?: true
  }

  export type SajuRecordSumAggregateInputType = {
    id?: true
    version?: true
  }

  export type SajuRecordMinAggregateInputType = {
    id?: true
    publicID?: true
    type?: true
    version?: true
    createdAt?: true
    userPublicID?: true
  }

  export type SajuRecordMaxAggregateInputType = {
    id?: true
    publicID?: true
    type?: true
    version?: true
    createdAt?: true
    userPublicID?: true
  }

  export type SajuRecordCountAggregateInputType = {
    id?: true
    publicID?: true
    data?: true
    type?: true
    version?: true
    createdAt?: true
    userPublicID?: true
    _all?: true
  }

  export type SajuRecordAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SajuRecord to aggregate.
     */
    where?: SajuRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SajuRecords to fetch.
     */
    orderBy?: SajuRecordOrderByWithRelationInput | SajuRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SajuRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SajuRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SajuRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SajuRecords
    **/
    _count?: true | SajuRecordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SajuRecordAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SajuRecordSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SajuRecordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SajuRecordMaxAggregateInputType
  }

  export type GetSajuRecordAggregateType<T extends SajuRecordAggregateArgs> = {
        [P in keyof T & keyof AggregateSajuRecord]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSajuRecord[P]>
      : GetScalarType<T[P], AggregateSajuRecord[P]>
  }




  export type SajuRecordGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SajuRecordWhereInput
    orderBy?: SajuRecordOrderByWithAggregationInput | SajuRecordOrderByWithAggregationInput[]
    by: SajuRecordScalarFieldEnum[] | SajuRecordScalarFieldEnum
    having?: SajuRecordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SajuRecordCountAggregateInputType | true
    _avg?: SajuRecordAvgAggregateInputType
    _sum?: SajuRecordSumAggregateInputType
    _min?: SajuRecordMinAggregateInputType
    _max?: SajuRecordMaxAggregateInputType
  }

  export type SajuRecordGroupByOutputType = {
    id: number
    publicID: string
    data: JsonValue
    type: $Enums.SajuType
    version: number
    createdAt: Date
    userPublicID: string
    _count: SajuRecordCountAggregateOutputType | null
    _avg: SajuRecordAvgAggregateOutputType | null
    _sum: SajuRecordSumAggregateOutputType | null
    _min: SajuRecordMinAggregateOutputType | null
    _max: SajuRecordMaxAggregateOutputType | null
  }

  type GetSajuRecordGroupByPayload<T extends SajuRecordGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SajuRecordGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SajuRecordGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SajuRecordGroupByOutputType[P]>
            : GetScalarType<T[P], SajuRecordGroupByOutputType[P]>
        }
      >
    >


  export type SajuRecordSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    publicID?: boolean
    data?: boolean
    type?: boolean
    version?: boolean
    createdAt?: boolean
    userPublicID?: boolean
  }, ExtArgs["result"]["sajuRecord"]>

  export type SajuRecordSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    publicID?: boolean
    data?: boolean
    type?: boolean
    version?: boolean
    createdAt?: boolean
    userPublicID?: boolean
  }, ExtArgs["result"]["sajuRecord"]>

  export type SajuRecordSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    publicID?: boolean
    data?: boolean
    type?: boolean
    version?: boolean
    createdAt?: boolean
    userPublicID?: boolean
  }, ExtArgs["result"]["sajuRecord"]>

  export type SajuRecordSelectScalar = {
    id?: boolean
    publicID?: boolean
    data?: boolean
    type?: boolean
    version?: boolean
    createdAt?: boolean
    userPublicID?: boolean
  }

  export type SajuRecordOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "publicID" | "data" | "type" | "version" | "createdAt" | "userPublicID", ExtArgs["result"]["sajuRecord"]>

  export type $SajuRecordPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SajuRecord"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      publicID: string
      data: Prisma.JsonValue
      type: $Enums.SajuType
      version: number
      createdAt: Date
      userPublicID: string
    }, ExtArgs["result"]["sajuRecord"]>
    composites: {}
  }

  type SajuRecordGetPayload<S extends boolean | null | undefined | SajuRecordDefaultArgs> = $Result.GetResult<Prisma.$SajuRecordPayload, S>

  type SajuRecordCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SajuRecordFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SajuRecordCountAggregateInputType | true
    }

  export interface SajuRecordDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SajuRecord'], meta: { name: 'SajuRecord' } }
    /**
     * Find zero or one SajuRecord that matches the filter.
     * @param {SajuRecordFindUniqueArgs} args - Arguments to find a SajuRecord
     * @example
     * // Get one SajuRecord
     * const sajuRecord = await prisma.sajuRecord.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SajuRecordFindUniqueArgs>(args: SelectSubset<T, SajuRecordFindUniqueArgs<ExtArgs>>): Prisma__SajuRecordClient<$Result.GetResult<Prisma.$SajuRecordPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SajuRecord that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SajuRecordFindUniqueOrThrowArgs} args - Arguments to find a SajuRecord
     * @example
     * // Get one SajuRecord
     * const sajuRecord = await prisma.sajuRecord.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SajuRecordFindUniqueOrThrowArgs>(args: SelectSubset<T, SajuRecordFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SajuRecordClient<$Result.GetResult<Prisma.$SajuRecordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SajuRecord that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SajuRecordFindFirstArgs} args - Arguments to find a SajuRecord
     * @example
     * // Get one SajuRecord
     * const sajuRecord = await prisma.sajuRecord.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SajuRecordFindFirstArgs>(args?: SelectSubset<T, SajuRecordFindFirstArgs<ExtArgs>>): Prisma__SajuRecordClient<$Result.GetResult<Prisma.$SajuRecordPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SajuRecord that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SajuRecordFindFirstOrThrowArgs} args - Arguments to find a SajuRecord
     * @example
     * // Get one SajuRecord
     * const sajuRecord = await prisma.sajuRecord.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SajuRecordFindFirstOrThrowArgs>(args?: SelectSubset<T, SajuRecordFindFirstOrThrowArgs<ExtArgs>>): Prisma__SajuRecordClient<$Result.GetResult<Prisma.$SajuRecordPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SajuRecords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SajuRecordFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SajuRecords
     * const sajuRecords = await prisma.sajuRecord.findMany()
     * 
     * // Get first 10 SajuRecords
     * const sajuRecords = await prisma.sajuRecord.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sajuRecordWithIdOnly = await prisma.sajuRecord.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SajuRecordFindManyArgs>(args?: SelectSubset<T, SajuRecordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SajuRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SajuRecord.
     * @param {SajuRecordCreateArgs} args - Arguments to create a SajuRecord.
     * @example
     * // Create one SajuRecord
     * const SajuRecord = await prisma.sajuRecord.create({
     *   data: {
     *     // ... data to create a SajuRecord
     *   }
     * })
     * 
     */
    create<T extends SajuRecordCreateArgs>(args: SelectSubset<T, SajuRecordCreateArgs<ExtArgs>>): Prisma__SajuRecordClient<$Result.GetResult<Prisma.$SajuRecordPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SajuRecords.
     * @param {SajuRecordCreateManyArgs} args - Arguments to create many SajuRecords.
     * @example
     * // Create many SajuRecords
     * const sajuRecord = await prisma.sajuRecord.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SajuRecordCreateManyArgs>(args?: SelectSubset<T, SajuRecordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SajuRecords and returns the data saved in the database.
     * @param {SajuRecordCreateManyAndReturnArgs} args - Arguments to create many SajuRecords.
     * @example
     * // Create many SajuRecords
     * const sajuRecord = await prisma.sajuRecord.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SajuRecords and only return the `id`
     * const sajuRecordWithIdOnly = await prisma.sajuRecord.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SajuRecordCreateManyAndReturnArgs>(args?: SelectSubset<T, SajuRecordCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SajuRecordPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SajuRecord.
     * @param {SajuRecordDeleteArgs} args - Arguments to delete one SajuRecord.
     * @example
     * // Delete one SajuRecord
     * const SajuRecord = await prisma.sajuRecord.delete({
     *   where: {
     *     // ... filter to delete one SajuRecord
     *   }
     * })
     * 
     */
    delete<T extends SajuRecordDeleteArgs>(args: SelectSubset<T, SajuRecordDeleteArgs<ExtArgs>>): Prisma__SajuRecordClient<$Result.GetResult<Prisma.$SajuRecordPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SajuRecord.
     * @param {SajuRecordUpdateArgs} args - Arguments to update one SajuRecord.
     * @example
     * // Update one SajuRecord
     * const sajuRecord = await prisma.sajuRecord.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SajuRecordUpdateArgs>(args: SelectSubset<T, SajuRecordUpdateArgs<ExtArgs>>): Prisma__SajuRecordClient<$Result.GetResult<Prisma.$SajuRecordPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SajuRecords.
     * @param {SajuRecordDeleteManyArgs} args - Arguments to filter SajuRecords to delete.
     * @example
     * // Delete a few SajuRecords
     * const { count } = await prisma.sajuRecord.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SajuRecordDeleteManyArgs>(args?: SelectSubset<T, SajuRecordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SajuRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SajuRecordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SajuRecords
     * const sajuRecord = await prisma.sajuRecord.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SajuRecordUpdateManyArgs>(args: SelectSubset<T, SajuRecordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SajuRecords and returns the data updated in the database.
     * @param {SajuRecordUpdateManyAndReturnArgs} args - Arguments to update many SajuRecords.
     * @example
     * // Update many SajuRecords
     * const sajuRecord = await prisma.sajuRecord.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SajuRecords and only return the `id`
     * const sajuRecordWithIdOnly = await prisma.sajuRecord.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SajuRecordUpdateManyAndReturnArgs>(args: SelectSubset<T, SajuRecordUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SajuRecordPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SajuRecord.
     * @param {SajuRecordUpsertArgs} args - Arguments to update or create a SajuRecord.
     * @example
     * // Update or create a SajuRecord
     * const sajuRecord = await prisma.sajuRecord.upsert({
     *   create: {
     *     // ... data to create a SajuRecord
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SajuRecord we want to update
     *   }
     * })
     */
    upsert<T extends SajuRecordUpsertArgs>(args: SelectSubset<T, SajuRecordUpsertArgs<ExtArgs>>): Prisma__SajuRecordClient<$Result.GetResult<Prisma.$SajuRecordPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SajuRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SajuRecordCountArgs} args - Arguments to filter SajuRecords to count.
     * @example
     * // Count the number of SajuRecords
     * const count = await prisma.sajuRecord.count({
     *   where: {
     *     // ... the filter for the SajuRecords we want to count
     *   }
     * })
    **/
    count<T extends SajuRecordCountArgs>(
      args?: Subset<T, SajuRecordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SajuRecordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SajuRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SajuRecordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SajuRecordAggregateArgs>(args: Subset<T, SajuRecordAggregateArgs>): Prisma.PrismaPromise<GetSajuRecordAggregateType<T>>

    /**
     * Group by SajuRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SajuRecordGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SajuRecordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SajuRecordGroupByArgs['orderBy'] }
        : { orderBy?: SajuRecordGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SajuRecordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSajuRecordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SajuRecord model
   */
  readonly fields: SajuRecordFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SajuRecord.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SajuRecordClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SajuRecord model
   */
  interface SajuRecordFieldRefs {
    readonly id: FieldRef<"SajuRecord", 'Int'>
    readonly publicID: FieldRef<"SajuRecord", 'String'>
    readonly data: FieldRef<"SajuRecord", 'Json'>
    readonly type: FieldRef<"SajuRecord", 'SajuType'>
    readonly version: FieldRef<"SajuRecord", 'Float'>
    readonly createdAt: FieldRef<"SajuRecord", 'DateTime'>
    readonly userPublicID: FieldRef<"SajuRecord", 'String'>
  }
    

  // Custom InputTypes
  /**
   * SajuRecord findUnique
   */
  export type SajuRecordFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SajuRecord
     */
    select?: SajuRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SajuRecord
     */
    omit?: SajuRecordOmit<ExtArgs> | null
    /**
     * Filter, which SajuRecord to fetch.
     */
    where: SajuRecordWhereUniqueInput
  }

  /**
   * SajuRecord findUniqueOrThrow
   */
  export type SajuRecordFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SajuRecord
     */
    select?: SajuRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SajuRecord
     */
    omit?: SajuRecordOmit<ExtArgs> | null
    /**
     * Filter, which SajuRecord to fetch.
     */
    where: SajuRecordWhereUniqueInput
  }

  /**
   * SajuRecord findFirst
   */
  export type SajuRecordFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SajuRecord
     */
    select?: SajuRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SajuRecord
     */
    omit?: SajuRecordOmit<ExtArgs> | null
    /**
     * Filter, which SajuRecord to fetch.
     */
    where?: SajuRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SajuRecords to fetch.
     */
    orderBy?: SajuRecordOrderByWithRelationInput | SajuRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SajuRecords.
     */
    cursor?: SajuRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SajuRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SajuRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SajuRecords.
     */
    distinct?: SajuRecordScalarFieldEnum | SajuRecordScalarFieldEnum[]
  }

  /**
   * SajuRecord findFirstOrThrow
   */
  export type SajuRecordFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SajuRecord
     */
    select?: SajuRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SajuRecord
     */
    omit?: SajuRecordOmit<ExtArgs> | null
    /**
     * Filter, which SajuRecord to fetch.
     */
    where?: SajuRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SajuRecords to fetch.
     */
    orderBy?: SajuRecordOrderByWithRelationInput | SajuRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SajuRecords.
     */
    cursor?: SajuRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SajuRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SajuRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SajuRecords.
     */
    distinct?: SajuRecordScalarFieldEnum | SajuRecordScalarFieldEnum[]
  }

  /**
   * SajuRecord findMany
   */
  export type SajuRecordFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SajuRecord
     */
    select?: SajuRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SajuRecord
     */
    omit?: SajuRecordOmit<ExtArgs> | null
    /**
     * Filter, which SajuRecords to fetch.
     */
    where?: SajuRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SajuRecords to fetch.
     */
    orderBy?: SajuRecordOrderByWithRelationInput | SajuRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SajuRecords.
     */
    cursor?: SajuRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SajuRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SajuRecords.
     */
    skip?: number
    distinct?: SajuRecordScalarFieldEnum | SajuRecordScalarFieldEnum[]
  }

  /**
   * SajuRecord create
   */
  export type SajuRecordCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SajuRecord
     */
    select?: SajuRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SajuRecord
     */
    omit?: SajuRecordOmit<ExtArgs> | null
    /**
     * The data needed to create a SajuRecord.
     */
    data: XOR<SajuRecordCreateInput, SajuRecordUncheckedCreateInput>
  }

  /**
   * SajuRecord createMany
   */
  export type SajuRecordCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SajuRecords.
     */
    data: SajuRecordCreateManyInput | SajuRecordCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SajuRecord createManyAndReturn
   */
  export type SajuRecordCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SajuRecord
     */
    select?: SajuRecordSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SajuRecord
     */
    omit?: SajuRecordOmit<ExtArgs> | null
    /**
     * The data used to create many SajuRecords.
     */
    data: SajuRecordCreateManyInput | SajuRecordCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SajuRecord update
   */
  export type SajuRecordUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SajuRecord
     */
    select?: SajuRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SajuRecord
     */
    omit?: SajuRecordOmit<ExtArgs> | null
    /**
     * The data needed to update a SajuRecord.
     */
    data: XOR<SajuRecordUpdateInput, SajuRecordUncheckedUpdateInput>
    /**
     * Choose, which SajuRecord to update.
     */
    where: SajuRecordWhereUniqueInput
  }

  /**
   * SajuRecord updateMany
   */
  export type SajuRecordUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SajuRecords.
     */
    data: XOR<SajuRecordUpdateManyMutationInput, SajuRecordUncheckedUpdateManyInput>
    /**
     * Filter which SajuRecords to update
     */
    where?: SajuRecordWhereInput
    /**
     * Limit how many SajuRecords to update.
     */
    limit?: number
  }

  /**
   * SajuRecord updateManyAndReturn
   */
  export type SajuRecordUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SajuRecord
     */
    select?: SajuRecordSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SajuRecord
     */
    omit?: SajuRecordOmit<ExtArgs> | null
    /**
     * The data used to update SajuRecords.
     */
    data: XOR<SajuRecordUpdateManyMutationInput, SajuRecordUncheckedUpdateManyInput>
    /**
     * Filter which SajuRecords to update
     */
    where?: SajuRecordWhereInput
    /**
     * Limit how many SajuRecords to update.
     */
    limit?: number
  }

  /**
   * SajuRecord upsert
   */
  export type SajuRecordUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SajuRecord
     */
    select?: SajuRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SajuRecord
     */
    omit?: SajuRecordOmit<ExtArgs> | null
    /**
     * The filter to search for the SajuRecord to update in case it exists.
     */
    where: SajuRecordWhereUniqueInput
    /**
     * In case the SajuRecord found by the `where` argument doesn't exist, create a new SajuRecord with this data.
     */
    create: XOR<SajuRecordCreateInput, SajuRecordUncheckedCreateInput>
    /**
     * In case the SajuRecord was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SajuRecordUpdateInput, SajuRecordUncheckedUpdateInput>
  }

  /**
   * SajuRecord delete
   */
  export type SajuRecordDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SajuRecord
     */
    select?: SajuRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SajuRecord
     */
    omit?: SajuRecordOmit<ExtArgs> | null
    /**
     * Filter which SajuRecord to delete.
     */
    where: SajuRecordWhereUniqueInput
  }

  /**
   * SajuRecord deleteMany
   */
  export type SajuRecordDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SajuRecords to delete
     */
    where?: SajuRecordWhereInput
    /**
     * Limit how many SajuRecords to delete.
     */
    limit?: number
  }

  /**
   * SajuRecord without action
   */
  export type SajuRecordDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SajuRecord
     */
    select?: SajuRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SajuRecord
     */
    omit?: SajuRecordOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const SajuRecordScalarFieldEnum: {
    id: 'id',
    publicID: 'publicID',
    data: 'data',
    type: 'type',
    version: 'version',
    createdAt: 'createdAt',
    userPublicID: 'userPublicID'
  };

  export type SajuRecordScalarFieldEnum = (typeof SajuRecordScalarFieldEnum)[keyof typeof SajuRecordScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'SajuType'
   */
  export type EnumSajuTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SajuType'>
    


  /**
   * Reference to a field of type 'SajuType[]'
   */
  export type ListEnumSajuTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SajuType[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    
  /**
   * Deep Input Types
   */


  export type SajuRecordWhereInput = {
    AND?: SajuRecordWhereInput | SajuRecordWhereInput[]
    OR?: SajuRecordWhereInput[]
    NOT?: SajuRecordWhereInput | SajuRecordWhereInput[]
    id?: IntFilter<"SajuRecord"> | number
    publicID?: StringFilter<"SajuRecord"> | string
    data?: JsonFilter<"SajuRecord">
    type?: EnumSajuTypeFilter<"SajuRecord"> | $Enums.SajuType
    version?: FloatFilter<"SajuRecord"> | number
    createdAt?: DateTimeFilter<"SajuRecord"> | Date | string
    userPublicID?: StringFilter<"SajuRecord"> | string
  }

  export type SajuRecordOrderByWithRelationInput = {
    id?: SortOrder
    publicID?: SortOrder
    data?: SortOrder
    type?: SortOrder
    version?: SortOrder
    createdAt?: SortOrder
    userPublicID?: SortOrder
  }

  export type SajuRecordWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    publicID?: string
    AND?: SajuRecordWhereInput | SajuRecordWhereInput[]
    OR?: SajuRecordWhereInput[]
    NOT?: SajuRecordWhereInput | SajuRecordWhereInput[]
    data?: JsonFilter<"SajuRecord">
    type?: EnumSajuTypeFilter<"SajuRecord"> | $Enums.SajuType
    version?: FloatFilter<"SajuRecord"> | number
    createdAt?: DateTimeFilter<"SajuRecord"> | Date | string
    userPublicID?: StringFilter<"SajuRecord"> | string
  }, "id" | "publicID">

  export type SajuRecordOrderByWithAggregationInput = {
    id?: SortOrder
    publicID?: SortOrder
    data?: SortOrder
    type?: SortOrder
    version?: SortOrder
    createdAt?: SortOrder
    userPublicID?: SortOrder
    _count?: SajuRecordCountOrderByAggregateInput
    _avg?: SajuRecordAvgOrderByAggregateInput
    _max?: SajuRecordMaxOrderByAggregateInput
    _min?: SajuRecordMinOrderByAggregateInput
    _sum?: SajuRecordSumOrderByAggregateInput
  }

  export type SajuRecordScalarWhereWithAggregatesInput = {
    AND?: SajuRecordScalarWhereWithAggregatesInput | SajuRecordScalarWhereWithAggregatesInput[]
    OR?: SajuRecordScalarWhereWithAggregatesInput[]
    NOT?: SajuRecordScalarWhereWithAggregatesInput | SajuRecordScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SajuRecord"> | number
    publicID?: StringWithAggregatesFilter<"SajuRecord"> | string
    data?: JsonWithAggregatesFilter<"SajuRecord">
    type?: EnumSajuTypeWithAggregatesFilter<"SajuRecord"> | $Enums.SajuType
    version?: FloatWithAggregatesFilter<"SajuRecord"> | number
    createdAt?: DateTimeWithAggregatesFilter<"SajuRecord"> | Date | string
    userPublicID?: StringWithAggregatesFilter<"SajuRecord"> | string
  }

  export type SajuRecordCreateInput = {
    publicID?: string
    data: JsonNullValueInput | InputJsonValue
    type: $Enums.SajuType
    version?: number
    createdAt?: Date | string
    userPublicID: string
  }

  export type SajuRecordUncheckedCreateInput = {
    id?: number
    publicID?: string
    data: JsonNullValueInput | InputJsonValue
    type: $Enums.SajuType
    version?: number
    createdAt?: Date | string
    userPublicID: string
  }

  export type SajuRecordUpdateInput = {
    publicID?: StringFieldUpdateOperationsInput | string
    data?: JsonNullValueInput | InputJsonValue
    type?: EnumSajuTypeFieldUpdateOperationsInput | $Enums.SajuType
    version?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userPublicID?: StringFieldUpdateOperationsInput | string
  }

  export type SajuRecordUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    publicID?: StringFieldUpdateOperationsInput | string
    data?: JsonNullValueInput | InputJsonValue
    type?: EnumSajuTypeFieldUpdateOperationsInput | $Enums.SajuType
    version?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userPublicID?: StringFieldUpdateOperationsInput | string
  }

  export type SajuRecordCreateManyInput = {
    id?: number
    publicID?: string
    data: JsonNullValueInput | InputJsonValue
    type: $Enums.SajuType
    version?: number
    createdAt?: Date | string
    userPublicID: string
  }

  export type SajuRecordUpdateManyMutationInput = {
    publicID?: StringFieldUpdateOperationsInput | string
    data?: JsonNullValueInput | InputJsonValue
    type?: EnumSajuTypeFieldUpdateOperationsInput | $Enums.SajuType
    version?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userPublicID?: StringFieldUpdateOperationsInput | string
  }

  export type SajuRecordUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    publicID?: StringFieldUpdateOperationsInput | string
    data?: JsonNullValueInput | InputJsonValue
    type?: EnumSajuTypeFieldUpdateOperationsInput | $Enums.SajuType
    version?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userPublicID?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type EnumSajuTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.SajuType | EnumSajuTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SajuType[] | ListEnumSajuTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SajuType[] | ListEnumSajuTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumSajuTypeFilter<$PrismaModel> | $Enums.SajuType
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SajuRecordCountOrderByAggregateInput = {
    id?: SortOrder
    publicID?: SortOrder
    data?: SortOrder
    type?: SortOrder
    version?: SortOrder
    createdAt?: SortOrder
    userPublicID?: SortOrder
  }

  export type SajuRecordAvgOrderByAggregateInput = {
    id?: SortOrder
    version?: SortOrder
  }

  export type SajuRecordMaxOrderByAggregateInput = {
    id?: SortOrder
    publicID?: SortOrder
    type?: SortOrder
    version?: SortOrder
    createdAt?: SortOrder
    userPublicID?: SortOrder
  }

  export type SajuRecordMinOrderByAggregateInput = {
    id?: SortOrder
    publicID?: SortOrder
    type?: SortOrder
    version?: SortOrder
    createdAt?: SortOrder
    userPublicID?: SortOrder
  }

  export type SajuRecordSumOrderByAggregateInput = {
    id?: SortOrder
    version?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type EnumSajuTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SajuType | EnumSajuTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SajuType[] | ListEnumSajuTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SajuType[] | ListEnumSajuTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumSajuTypeWithAggregatesFilter<$PrismaModel> | $Enums.SajuType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSajuTypeFilter<$PrismaModel>
    _max?: NestedEnumSajuTypeFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumSajuTypeFieldUpdateOperationsInput = {
    set?: $Enums.SajuType
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumSajuTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.SajuType | EnumSajuTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SajuType[] | ListEnumSajuTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SajuType[] | ListEnumSajuTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumSajuTypeFilter<$PrismaModel> | $Enums.SajuType
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedEnumSajuTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SajuType | EnumSajuTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SajuType[] | ListEnumSajuTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SajuType[] | ListEnumSajuTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumSajuTypeWithAggregatesFilter<$PrismaModel> | $Enums.SajuType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSajuTypeFilter<$PrismaModel>
    _max?: NestedEnumSajuTypeFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}
import { GraphQLResolveInfo } from 'graphql';
import { Context } from '../index';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type AppBody = AppBody1 | AppBody2;

export type AppBody1 = {
  __typename?: 'AppBody1';
  type?: Maybe<Scalars['String']['output']>;
};

export type AppBody2 = {
  __typename?: 'AppBody2';
  type?: Maybe<Scalars['String']['output']>;
};

export type Button = {
  __typename?: 'Button';
  children?: Maybe<Scalars['String']['output']>;
  variant?: Maybe<Scalars['String']['output']>;
};

export type CombinedInput = {
  __typename?: 'CombinedInput';
  type?: Maybe<Scalars['String']['output']>;
};

export type CoordInput = {
  __typename?: 'CoordInput';
  type?: Maybe<Scalars['String']['output']>;
};

export type Error = {
  __typename?: 'Error';
  message?: Maybe<Scalars['String']['output']>;
};

export type Forecast = {
  __typename?: 'Forecast';
  location?: Maybe<Loction>;
  temperature?: Maybe<Scalars['String']['output']>;
  temperatureUnit?: Maybe<Scalars['String']['output']>;
};

export type Inputs = CombinedInput | CoordInput;

export type Loction = {
  __typename?: 'Loction';
  city?: Maybe<Scalars['String']['output']>;
  state?: Maybe<Scalars['String']['output']>;
};

export type LookupForm = {
  __typename?: 'LookupForm';
  button?: Maybe<WebButton>;
  formText?: Maybe<Typography>;
  inputs?: Maybe<Array<Maybe<Inputs>>>;
};

export type Query = {
  __typename?: 'Query';
  app?: Maybe<WebApp>;
  forecast?: Maybe<Forecast>;
};

export type Results = {
  __typename?: 'Results';
  bodytext?: Maybe<Typography>;
  errorText?: Maybe<Typography>;
  loadingText?: Maybe<Typography>;
  subText?: Maybe<Typography>;
};

export type Typography = {
  __typename?: 'Typography';
  variant?: Maybe<Scalars['String']['output']>;
};

export type WebApp = {
  __typename?: 'WebApp';
  appBody?: Maybe<AppBody>;
  lookupForm?: Maybe<LookupForm>;
  results?: Maybe<Results>;
};

export type WebButton = Button | Error;

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping of union types */
export type ResolversUnionTypes<RefType extends Record<string, unknown>> = ResolversObject<{
  AppBody: ( AppBody1 ) | ( AppBody2 );
  Inputs: ( CombinedInput ) | ( CoordInput );
  WebButton: ( Button ) | ( Error );
}>;


/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  AppBody: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['AppBody']>;
  AppBody1: ResolverTypeWrapper<AppBody1>;
  AppBody2: ResolverTypeWrapper<AppBody2>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  Button: ResolverTypeWrapper<Button>;
  CombinedInput: ResolverTypeWrapper<CombinedInput>;
  CoordInput: ResolverTypeWrapper<CoordInput>;
  Error: ResolverTypeWrapper<Error>;
  Forecast: ResolverTypeWrapper<Forecast>;
  Inputs: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['Inputs']>;
  Loction: ResolverTypeWrapper<Loction>;
  LookupForm: ResolverTypeWrapper<Omit<LookupForm, 'button' | 'inputs'> & { button?: Maybe<ResolversTypes['WebButton']>, inputs?: Maybe<Array<Maybe<ResolversTypes['Inputs']>>> }>;
  Query: ResolverTypeWrapper<{}>;
  Results: ResolverTypeWrapper<Results>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  Typography: ResolverTypeWrapper<Typography>;
  WebApp: ResolverTypeWrapper<Omit<WebApp, 'appBody'> & { appBody?: Maybe<ResolversTypes['AppBody']> }>;
  WebButton: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['WebButton']>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  AppBody: ResolversUnionTypes<ResolversParentTypes>['AppBody'];
  AppBody1: AppBody1;
  AppBody2: AppBody2;
  Boolean: Scalars['Boolean']['output'];
  Button: Button;
  CombinedInput: CombinedInput;
  CoordInput: CoordInput;
  Error: Error;
  Forecast: Forecast;
  Inputs: ResolversUnionTypes<ResolversParentTypes>['Inputs'];
  Loction: Loction;
  LookupForm: Omit<LookupForm, 'button' | 'inputs'> & { button?: Maybe<ResolversParentTypes['WebButton']>, inputs?: Maybe<Array<Maybe<ResolversParentTypes['Inputs']>>> };
  Query: {};
  Results: Results;
  String: Scalars['String']['output'];
  Typography: Typography;
  WebApp: Omit<WebApp, 'appBody'> & { appBody?: Maybe<ResolversParentTypes['AppBody']> };
  WebButton: ResolversUnionTypes<ResolversParentTypes>['WebButton'];
}>;

export type AppBodyResolvers<ContextType = Context, ParentType extends ResolversParentTypes['AppBody'] = ResolversParentTypes['AppBody']> = ResolversObject<{
  __resolveType: TypeResolveFn<'AppBody1' | 'AppBody2', ParentType, ContextType>;
}>;

export type AppBody1Resolvers<ContextType = Context, ParentType extends ResolversParentTypes['AppBody1'] = ResolversParentTypes['AppBody1']> = ResolversObject<{
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AppBody2Resolvers<ContextType = Context, ParentType extends ResolversParentTypes['AppBody2'] = ResolversParentTypes['AppBody2']> = ResolversObject<{
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ButtonResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Button'] = ResolversParentTypes['Button']> = ResolversObject<{
  children?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  variant?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CombinedInputResolvers<ContextType = Context, ParentType extends ResolversParentTypes['CombinedInput'] = ResolversParentTypes['CombinedInput']> = ResolversObject<{
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CoordInputResolvers<ContextType = Context, ParentType extends ResolversParentTypes['CoordInput'] = ResolversParentTypes['CoordInput']> = ResolversObject<{
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ErrorResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Error'] = ResolversParentTypes['Error']> = ResolversObject<{
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ForecastResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Forecast'] = ResolversParentTypes['Forecast']> = ResolversObject<{
  location?: Resolver<Maybe<ResolversTypes['Loction']>, ParentType, ContextType>;
  temperature?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  temperatureUnit?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type InputsResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Inputs'] = ResolversParentTypes['Inputs']> = ResolversObject<{
  __resolveType: TypeResolveFn<'CombinedInput' | 'CoordInput', ParentType, ContextType>;
}>;

export type LoctionResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Loction'] = ResolversParentTypes['Loction']> = ResolversObject<{
  city?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  state?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LookupFormResolvers<ContextType = Context, ParentType extends ResolversParentTypes['LookupForm'] = ResolversParentTypes['LookupForm']> = ResolversObject<{
  button?: Resolver<Maybe<ResolversTypes['WebButton']>, ParentType, ContextType>;
  formText?: Resolver<Maybe<ResolversTypes['Typography']>, ParentType, ContextType>;
  inputs?: Resolver<Maybe<Array<Maybe<ResolversTypes['Inputs']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  app?: Resolver<Maybe<ResolversTypes['WebApp']>, ParentType, ContextType>;
  forecast?: Resolver<Maybe<ResolversTypes['Forecast']>, ParentType, ContextType>;
}>;

export type ResultsResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Results'] = ResolversParentTypes['Results']> = ResolversObject<{
  bodytext?: Resolver<Maybe<ResolversTypes['Typography']>, ParentType, ContextType>;
  errorText?: Resolver<Maybe<ResolversTypes['Typography']>, ParentType, ContextType>;
  loadingText?: Resolver<Maybe<ResolversTypes['Typography']>, ParentType, ContextType>;
  subText?: Resolver<Maybe<ResolversTypes['Typography']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TypographyResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Typography'] = ResolversParentTypes['Typography']> = ResolversObject<{
  variant?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type WebAppResolvers<ContextType = Context, ParentType extends ResolversParentTypes['WebApp'] = ResolversParentTypes['WebApp']> = ResolversObject<{
  appBody?: Resolver<Maybe<ResolversTypes['AppBody']>, ParentType, ContextType>;
  lookupForm?: Resolver<Maybe<ResolversTypes['LookupForm']>, ParentType, ContextType>;
  results?: Resolver<Maybe<ResolversTypes['Results']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type WebButtonResolvers<ContextType = Context, ParentType extends ResolversParentTypes['WebButton'] = ResolversParentTypes['WebButton']> = ResolversObject<{
  __resolveType: TypeResolveFn<'Button' | 'Error', ParentType, ContextType>;
}>;

export type Resolvers<ContextType = Context> = ResolversObject<{
  AppBody?: AppBodyResolvers<ContextType>;
  AppBody1?: AppBody1Resolvers<ContextType>;
  AppBody2?: AppBody2Resolvers<ContextType>;
  Button?: ButtonResolvers<ContextType>;
  CombinedInput?: CombinedInputResolvers<ContextType>;
  CoordInput?: CoordInputResolvers<ContextType>;
  Error?: ErrorResolvers<ContextType>;
  Forecast?: ForecastResolvers<ContextType>;
  Inputs?: InputsResolvers<ContextType>;
  Loction?: LoctionResolvers<ContextType>;
  LookupForm?: LookupFormResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Results?: ResultsResolvers<ContextType>;
  Typography?: TypographyResolvers<ContextType>;
  WebApp?: WebAppResolvers<ContextType>;
  WebButton?: WebButtonResolvers<ContextType>;
}>;


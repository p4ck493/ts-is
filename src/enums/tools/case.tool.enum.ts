export enum CaseToolEnum {
  Model, // Is.PersonModel
  Method, // Is.String
  AfterWrapperAndMethod, // Is.Not.String
  BeforeWrapperAndMethod, // Is.All.String
  BeforeAndAfterWrapperAndMethod, // Is.All.Not.String
  BeforeWrapperAndModel, // Is.All.PersonModel
  AfterWrapperAndModel, // Is.Not.PersonModel
  BeforeAndAfterWrapperAndModel, // Is.All.Not.PersonModel
  ConnectionWrapperAndMethod, // Is.Null.Or.Undefined.Or.Empty
  BeforeAndConnectionWrapperAndMethod, // Is.All.String.Or.Number
  ConnectionAndAfterWrapperAndMethod, // Is.Not.String.Or.Number
  BeforeAndConnectionAndAfterWrapperAndMethod, // Is.All.Not.PersonModel.Or.AddressModel
}

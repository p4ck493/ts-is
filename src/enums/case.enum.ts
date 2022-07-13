enum CaseEnum {
  Model, // is.PersonModel
  Method, // is.string
  AfterWrapperAndMethod, // is.not.string
  BeforeWrapperAndMethod, // is.all.string
  BeforeAndAfterWrapperAndMethod, // is.all.not.string
  BeforeWrapperAndModel, // is.all.PersonModel
  AfterWrapperAndModel, // is.not.PersonModel
  BeforeAndAfterWrapperAndModel, // is.all.not.PersonModel
  ConnectionWrapperAndMethod, // is.null.or.undefined.or.empty
  BeforeAndConnectionWrapperAndMethod, // is.all.string.or.number
  ConnectionAndAfterWrapperAndMethod, // is.not.string.or.number
  BeforeAndConnectionAndAfterWrapperAndMethod, // is.all.not.string.or.number
  ConnectionWrapperAndModel, // is.PersonModel.or.AddressModel
  ConnectionAndAfterWrapperAndModel, // is.not.Person.or.Address
  BeforeAndConnectionAndAfterWrapperAndModel, // is.all.not.PersonModel.or.AddressModel
  BeforeAndConnectionWrapperAndModel, // is.all.PersonModel.or.AddressModel
}

// enum NewCaseEnum {
//   METHOD,
//   MODEL,
//   CONNECTION_METHOD,
//   CONNECTION_MODEL,
//   NOT_METHOD,
//   NOT_MODEL,
//
//
// }

export default CaseEnum;

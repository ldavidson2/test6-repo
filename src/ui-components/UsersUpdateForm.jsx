/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Badge,
  Button,
  Divider,
  Flex,
  Grid,
  Icon,
  ScrollView,
  Text,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Users } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
function ArrayField({
  items = [],
  onChange,
  label,
  inputFieldRef,
  children,
  hasError,
  setFieldValue,
  currentFieldValue,
  defaultFieldValue,
  lengthLimit,
  getBadgeText,
}) {
  const labelElement = <Text>{label}</Text>;
  const { tokens } = useTheme();
  const [selectedBadgeIndex, setSelectedBadgeIndex] = React.useState();
  const [isEditing, setIsEditing] = React.useState();
  React.useEffect(() => {
    if (isEditing) {
      inputFieldRef?.current?.focus();
    }
  }, [isEditing]);
  const removeItem = async (removeIndex) => {
    const newItems = items.filter((value, index) => index !== removeIndex);
    await onChange(newItems);
    setSelectedBadgeIndex(undefined);
  };
  const addItem = async () => {
    if (
      currentFieldValue !== undefined &&
      currentFieldValue !== null &&
      currentFieldValue !== "" &&
      !hasError
    ) {
      const newItems = [...items];
      if (selectedBadgeIndex !== undefined) {
        newItems[selectedBadgeIndex] = currentFieldValue;
        setSelectedBadgeIndex(undefined);
      } else {
        newItems.push(currentFieldValue);
      }
      await onChange(newItems);
      setIsEditing(false);
    }
  };
  const arraySection = (
    <React.Fragment>
      {!!items?.length && (
        <ScrollView height="inherit" width="inherit" maxHeight={"7rem"}>
          {items.map((value, index) => {
            return (
              <Badge
                key={index}
                style={{
                  cursor: "pointer",
                  alignItems: "center",
                  marginRight: 3,
                  marginTop: 3,
                  backgroundColor:
                    index === selectedBadgeIndex ? "#B8CEF9" : "",
                }}
                onClick={() => {
                  setSelectedBadgeIndex(index);
                  setFieldValue(items[index]);
                  setIsEditing(true);
                }}
              >
                {getBadgeText ? getBadgeText(value) : value.toString()}
                <Icon
                  style={{
                    cursor: "pointer",
                    paddingLeft: 3,
                    width: 20,
                    height: 20,
                  }}
                  viewBox={{ width: 20, height: 20 }}
                  paths={[
                    {
                      d: "M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z",
                      stroke: "black",
                    },
                  ]}
                  ariaLabel="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    removeItem(index);
                  }}
                />
              </Badge>
            );
          })}
        </ScrollView>
      )}
      <Divider orientation="horizontal" marginTop={5} />
    </React.Fragment>
  );
  if (lengthLimit !== undefined && items.length >= lengthLimit && !isEditing) {
    return (
      <React.Fragment>
        {labelElement}
        {arraySection}
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      {labelElement}
      {isEditing && children}
      {!isEditing ? (
        <>
          <Button
            onClick={() => {
              setIsEditing(true);
            }}
          >
            Add item
          </Button>
        </>
      ) : (
        <Flex justifyContent="flex-end">
          {(currentFieldValue || isEditing) && (
            <Button
              children="Cancel"
              type="button"
              size="small"
              onClick={() => {
                setFieldValue(defaultFieldValue);
                setIsEditing(false);
                setSelectedBadgeIndex(undefined);
              }}
            ></Button>
          )}
          <Button
            size="small"
            variation="link"
            color={tokens.colors.brand.primary[80]}
            isDisabled={hasError}
            onClick={addItem}
          >
            {selectedBadgeIndex !== undefined ? "Save" : "Add"}
          </Button>
        </Flex>
      )}
      {arraySection}
    </React.Fragment>
  );
}
export default function UsersUpdateForm(props) {
  const {
    id: idProp,
    users,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    PK: "",
    SK: "",
    companyName: "",
    companyEmail: "",
    companyNumber: "",
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    specialty: "",
    securityLevel: "",
    clinicName: "",
    dateOfBirth: "",
    gender: "",
    preferredContact: "",
    dementiaLikelihood: "",
    notes: "",
    tests: [],
  };
  const [PK, setPK] = React.useState(initialValues.PK);
  const [SK, setSK] = React.useState(initialValues.SK);
  const [companyName, setCompanyName] = React.useState(
    initialValues.companyName
  );
  const [companyEmail, setCompanyEmail] = React.useState(
    initialValues.companyEmail
  );
  const [companyNumber, setCompanyNumber] = React.useState(
    initialValues.companyNumber
  );
  const [firstName, setFirstName] = React.useState(initialValues.firstName);
  const [lastName, setLastName] = React.useState(initialValues.lastName);
  const [email, setEmail] = React.useState(initialValues.email);
  const [phoneNumber, setPhoneNumber] = React.useState(
    initialValues.phoneNumber
  );
  const [specialty, setSpecialty] = React.useState(initialValues.specialty);
  const [securityLevel, setSecurityLevel] = React.useState(
    initialValues.securityLevel
  );
  const [clinicName, setClinicName] = React.useState(initialValues.clinicName);
  const [dateOfBirth, setDateOfBirth] = React.useState(
    initialValues.dateOfBirth
  );
  const [gender, setGender] = React.useState(initialValues.gender);
  const [preferredContact, setPreferredContact] = React.useState(
    initialValues.preferredContact
  );
  const [dementiaLikelihood, setDementiaLikelihood] = React.useState(
    initialValues.dementiaLikelihood
  );
  const [notes, setNotes] = React.useState(initialValues.notes);
  const [tests, setTests] = React.useState(initialValues.tests);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = usersRecord
      ? { ...initialValues, ...usersRecord }
      : initialValues;
    setPK(cleanValues.PK);
    setSK(cleanValues.SK);
    setCompanyName(cleanValues.companyName);
    setCompanyEmail(cleanValues.companyEmail);
    setCompanyNumber(cleanValues.companyNumber);
    setFirstName(cleanValues.firstName);
    setLastName(cleanValues.lastName);
    setEmail(cleanValues.email);
    setPhoneNumber(cleanValues.phoneNumber);
    setSpecialty(cleanValues.specialty);
    setSecurityLevel(cleanValues.securityLevel);
    setClinicName(cleanValues.clinicName);
    setDateOfBirth(cleanValues.dateOfBirth);
    setGender(cleanValues.gender);
    setPreferredContact(cleanValues.preferredContact);
    setDementiaLikelihood(cleanValues.dementiaLikelihood);
    setNotes(cleanValues.notes);
    setTests(cleanValues.tests ?? []);
    setCurrentTestsValue("");
    setErrors({});
  };
  const [usersRecord, setUsersRecord] = React.useState(users);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp ? await DataStore.query(Users, idProp) : users;
      setUsersRecord(record);
    };
    queryData();
  }, [idProp, users]);
  React.useEffect(resetStateValues, [usersRecord]);
  const [currentTestsValue, setCurrentTestsValue] = React.useState("");
  const testsRef = React.createRef();
  const validations = {
    PK: [{ type: "Required" }],
    SK: [{ type: "Required" }],
    companyName: [],
    companyEmail: [],
    companyNumber: [],
    firstName: [],
    lastName: [],
    email: [],
    phoneNumber: [],
    specialty: [],
    securityLevel: [],
    clinicName: [],
    dateOfBirth: [],
    gender: [],
    preferredContact: [],
    dementiaLikelihood: [],
    notes: [],
    tests: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value = getDisplayValue
      ? getDisplayValue(currentValue)
      : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          PK,
          SK,
          companyName,
          companyEmail,
          companyNumber,
          firstName,
          lastName,
          email,
          phoneNumber,
          specialty,
          securityLevel,
          clinicName,
          dateOfBirth,
          gender,
          preferredContact,
          dementiaLikelihood,
          notes,
          tests,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(
            Users.copyOf(usersRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "UsersUpdateForm")}
      {...rest}
    >
      <TextField
        label="Pk"
        isRequired={true}
        isReadOnly={false}
        value={PK}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              PK: value,
              SK,
              companyName,
              companyEmail,
              companyNumber,
              firstName,
              lastName,
              email,
              phoneNumber,
              specialty,
              securityLevel,
              clinicName,
              dateOfBirth,
              gender,
              preferredContact,
              dementiaLikelihood,
              notes,
              tests,
            };
            const result = onChange(modelFields);
            value = result?.PK ?? value;
          }
          if (errors.PK?.hasError) {
            runValidationTasks("PK", value);
          }
          setPK(value);
        }}
        onBlur={() => runValidationTasks("PK", PK)}
        errorMessage={errors.PK?.errorMessage}
        hasError={errors.PK?.hasError}
        {...getOverrideProps(overrides, "PK")}
      ></TextField>
      <TextField
        label="Sk"
        isRequired={true}
        isReadOnly={false}
        value={SK}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              PK,
              SK: value,
              companyName,
              companyEmail,
              companyNumber,
              firstName,
              lastName,
              email,
              phoneNumber,
              specialty,
              securityLevel,
              clinicName,
              dateOfBirth,
              gender,
              preferredContact,
              dementiaLikelihood,
              notes,
              tests,
            };
            const result = onChange(modelFields);
            value = result?.SK ?? value;
          }
          if (errors.SK?.hasError) {
            runValidationTasks("SK", value);
          }
          setSK(value);
        }}
        onBlur={() => runValidationTasks("SK", SK)}
        errorMessage={errors.SK?.errorMessage}
        hasError={errors.SK?.hasError}
        {...getOverrideProps(overrides, "SK")}
      ></TextField>
      <TextField
        label="Company name"
        isRequired={false}
        isReadOnly={false}
        value={companyName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              PK,
              SK,
              companyName: value,
              companyEmail,
              companyNumber,
              firstName,
              lastName,
              email,
              phoneNumber,
              specialty,
              securityLevel,
              clinicName,
              dateOfBirth,
              gender,
              preferredContact,
              dementiaLikelihood,
              notes,
              tests,
            };
            const result = onChange(modelFields);
            value = result?.companyName ?? value;
          }
          if (errors.companyName?.hasError) {
            runValidationTasks("companyName", value);
          }
          setCompanyName(value);
        }}
        onBlur={() => runValidationTasks("companyName", companyName)}
        errorMessage={errors.companyName?.errorMessage}
        hasError={errors.companyName?.hasError}
        {...getOverrideProps(overrides, "companyName")}
      ></TextField>
      <TextField
        label="Company email"
        isRequired={false}
        isReadOnly={false}
        value={companyEmail}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              PK,
              SK,
              companyName,
              companyEmail: value,
              companyNumber,
              firstName,
              lastName,
              email,
              phoneNumber,
              specialty,
              securityLevel,
              clinicName,
              dateOfBirth,
              gender,
              preferredContact,
              dementiaLikelihood,
              notes,
              tests,
            };
            const result = onChange(modelFields);
            value = result?.companyEmail ?? value;
          }
          if (errors.companyEmail?.hasError) {
            runValidationTasks("companyEmail", value);
          }
          setCompanyEmail(value);
        }}
        onBlur={() => runValidationTasks("companyEmail", companyEmail)}
        errorMessage={errors.companyEmail?.errorMessage}
        hasError={errors.companyEmail?.hasError}
        {...getOverrideProps(overrides, "companyEmail")}
      ></TextField>
      <TextField
        label="Company number"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={companyNumber}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              PK,
              SK,
              companyName,
              companyEmail,
              companyNumber: value,
              firstName,
              lastName,
              email,
              phoneNumber,
              specialty,
              securityLevel,
              clinicName,
              dateOfBirth,
              gender,
              preferredContact,
              dementiaLikelihood,
              notes,
              tests,
            };
            const result = onChange(modelFields);
            value = result?.companyNumber ?? value;
          }
          if (errors.companyNumber?.hasError) {
            runValidationTasks("companyNumber", value);
          }
          setCompanyNumber(value);
        }}
        onBlur={() => runValidationTasks("companyNumber", companyNumber)}
        errorMessage={errors.companyNumber?.errorMessage}
        hasError={errors.companyNumber?.hasError}
        {...getOverrideProps(overrides, "companyNumber")}
      ></TextField>
      <TextField
        label="First name"
        isRequired={false}
        isReadOnly={false}
        value={firstName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              PK,
              SK,
              companyName,
              companyEmail,
              companyNumber,
              firstName: value,
              lastName,
              email,
              phoneNumber,
              specialty,
              securityLevel,
              clinicName,
              dateOfBirth,
              gender,
              preferredContact,
              dementiaLikelihood,
              notes,
              tests,
            };
            const result = onChange(modelFields);
            value = result?.firstName ?? value;
          }
          if (errors.firstName?.hasError) {
            runValidationTasks("firstName", value);
          }
          setFirstName(value);
        }}
        onBlur={() => runValidationTasks("firstName", firstName)}
        errorMessage={errors.firstName?.errorMessage}
        hasError={errors.firstName?.hasError}
        {...getOverrideProps(overrides, "firstName")}
      ></TextField>
      <TextField
        label="Last name"
        isRequired={false}
        isReadOnly={false}
        value={lastName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              PK,
              SK,
              companyName,
              companyEmail,
              companyNumber,
              firstName,
              lastName: value,
              email,
              phoneNumber,
              specialty,
              securityLevel,
              clinicName,
              dateOfBirth,
              gender,
              preferredContact,
              dementiaLikelihood,
              notes,
              tests,
            };
            const result = onChange(modelFields);
            value = result?.lastName ?? value;
          }
          if (errors.lastName?.hasError) {
            runValidationTasks("lastName", value);
          }
          setLastName(value);
        }}
        onBlur={() => runValidationTasks("lastName", lastName)}
        errorMessage={errors.lastName?.errorMessage}
        hasError={errors.lastName?.hasError}
        {...getOverrideProps(overrides, "lastName")}
      ></TextField>
      <TextField
        label="Email"
        isRequired={false}
        isReadOnly={false}
        value={email}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              PK,
              SK,
              companyName,
              companyEmail,
              companyNumber,
              firstName,
              lastName,
              email: value,
              phoneNumber,
              specialty,
              securityLevel,
              clinicName,
              dateOfBirth,
              gender,
              preferredContact,
              dementiaLikelihood,
              notes,
              tests,
            };
            const result = onChange(modelFields);
            value = result?.email ?? value;
          }
          if (errors.email?.hasError) {
            runValidationTasks("email", value);
          }
          setEmail(value);
        }}
        onBlur={() => runValidationTasks("email", email)}
        errorMessage={errors.email?.errorMessage}
        hasError={errors.email?.hasError}
        {...getOverrideProps(overrides, "email")}
      ></TextField>
      <TextField
        label="Phone number"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={phoneNumber}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              PK,
              SK,
              companyName,
              companyEmail,
              companyNumber,
              firstName,
              lastName,
              email,
              phoneNumber: value,
              specialty,
              securityLevel,
              clinicName,
              dateOfBirth,
              gender,
              preferredContact,
              dementiaLikelihood,
              notes,
              tests,
            };
            const result = onChange(modelFields);
            value = result?.phoneNumber ?? value;
          }
          if (errors.phoneNumber?.hasError) {
            runValidationTasks("phoneNumber", value);
          }
          setPhoneNumber(value);
        }}
        onBlur={() => runValidationTasks("phoneNumber", phoneNumber)}
        errorMessage={errors.phoneNumber?.errorMessage}
        hasError={errors.phoneNumber?.hasError}
        {...getOverrideProps(overrides, "phoneNumber")}
      ></TextField>
      <TextField
        label="Specialty"
        isRequired={false}
        isReadOnly={false}
        value={specialty}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              PK,
              SK,
              companyName,
              companyEmail,
              companyNumber,
              firstName,
              lastName,
              email,
              phoneNumber,
              specialty: value,
              securityLevel,
              clinicName,
              dateOfBirth,
              gender,
              preferredContact,
              dementiaLikelihood,
              notes,
              tests,
            };
            const result = onChange(modelFields);
            value = result?.specialty ?? value;
          }
          if (errors.specialty?.hasError) {
            runValidationTasks("specialty", value);
          }
          setSpecialty(value);
        }}
        onBlur={() => runValidationTasks("specialty", specialty)}
        errorMessage={errors.specialty?.errorMessage}
        hasError={errors.specialty?.hasError}
        {...getOverrideProps(overrides, "specialty")}
      ></TextField>
      <TextField
        label="Security level"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={securityLevel}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              PK,
              SK,
              companyName,
              companyEmail,
              companyNumber,
              firstName,
              lastName,
              email,
              phoneNumber,
              specialty,
              securityLevel: value,
              clinicName,
              dateOfBirth,
              gender,
              preferredContact,
              dementiaLikelihood,
              notes,
              tests,
            };
            const result = onChange(modelFields);
            value = result?.securityLevel ?? value;
          }
          if (errors.securityLevel?.hasError) {
            runValidationTasks("securityLevel", value);
          }
          setSecurityLevel(value);
        }}
        onBlur={() => runValidationTasks("securityLevel", securityLevel)}
        errorMessage={errors.securityLevel?.errorMessage}
        hasError={errors.securityLevel?.hasError}
        {...getOverrideProps(overrides, "securityLevel")}
      ></TextField>
      <TextField
        label="Clinic name"
        isRequired={false}
        isReadOnly={false}
        value={clinicName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              PK,
              SK,
              companyName,
              companyEmail,
              companyNumber,
              firstName,
              lastName,
              email,
              phoneNumber,
              specialty,
              securityLevel,
              clinicName: value,
              dateOfBirth,
              gender,
              preferredContact,
              dementiaLikelihood,
              notes,
              tests,
            };
            const result = onChange(modelFields);
            value = result?.clinicName ?? value;
          }
          if (errors.clinicName?.hasError) {
            runValidationTasks("clinicName", value);
          }
          setClinicName(value);
        }}
        onBlur={() => runValidationTasks("clinicName", clinicName)}
        errorMessage={errors.clinicName?.errorMessage}
        hasError={errors.clinicName?.hasError}
        {...getOverrideProps(overrides, "clinicName")}
      ></TextField>
      <TextField
        label="Date of birth"
        isRequired={false}
        isReadOnly={false}
        value={dateOfBirth}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              PK,
              SK,
              companyName,
              companyEmail,
              companyNumber,
              firstName,
              lastName,
              email,
              phoneNumber,
              specialty,
              securityLevel,
              clinicName,
              dateOfBirth: value,
              gender,
              preferredContact,
              dementiaLikelihood,
              notes,
              tests,
            };
            const result = onChange(modelFields);
            value = result?.dateOfBirth ?? value;
          }
          if (errors.dateOfBirth?.hasError) {
            runValidationTasks("dateOfBirth", value);
          }
          setDateOfBirth(value);
        }}
        onBlur={() => runValidationTasks("dateOfBirth", dateOfBirth)}
        errorMessage={errors.dateOfBirth?.errorMessage}
        hasError={errors.dateOfBirth?.hasError}
        {...getOverrideProps(overrides, "dateOfBirth")}
      ></TextField>
      <TextField
        label="Gender"
        isRequired={false}
        isReadOnly={false}
        value={gender}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              PK,
              SK,
              companyName,
              companyEmail,
              companyNumber,
              firstName,
              lastName,
              email,
              phoneNumber,
              specialty,
              securityLevel,
              clinicName,
              dateOfBirth,
              gender: value,
              preferredContact,
              dementiaLikelihood,
              notes,
              tests,
            };
            const result = onChange(modelFields);
            value = result?.gender ?? value;
          }
          if (errors.gender?.hasError) {
            runValidationTasks("gender", value);
          }
          setGender(value);
        }}
        onBlur={() => runValidationTasks("gender", gender)}
        errorMessage={errors.gender?.errorMessage}
        hasError={errors.gender?.hasError}
        {...getOverrideProps(overrides, "gender")}
      ></TextField>
      <TextField
        label="Preferred contact"
        isRequired={false}
        isReadOnly={false}
        value={preferredContact}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              PK,
              SK,
              companyName,
              companyEmail,
              companyNumber,
              firstName,
              lastName,
              email,
              phoneNumber,
              specialty,
              securityLevel,
              clinicName,
              dateOfBirth,
              gender,
              preferredContact: value,
              dementiaLikelihood,
              notes,
              tests,
            };
            const result = onChange(modelFields);
            value = result?.preferredContact ?? value;
          }
          if (errors.preferredContact?.hasError) {
            runValidationTasks("preferredContact", value);
          }
          setPreferredContact(value);
        }}
        onBlur={() => runValidationTasks("preferredContact", preferredContact)}
        errorMessage={errors.preferredContact?.errorMessage}
        hasError={errors.preferredContact?.hasError}
        {...getOverrideProps(overrides, "preferredContact")}
      ></TextField>
      <TextField
        label="Dementia likelihood"
        isRequired={false}
        isReadOnly={false}
        value={dementiaLikelihood}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              PK,
              SK,
              companyName,
              companyEmail,
              companyNumber,
              firstName,
              lastName,
              email,
              phoneNumber,
              specialty,
              securityLevel,
              clinicName,
              dateOfBirth,
              gender,
              preferredContact,
              dementiaLikelihood: value,
              notes,
              tests,
            };
            const result = onChange(modelFields);
            value = result?.dementiaLikelihood ?? value;
          }
          if (errors.dementiaLikelihood?.hasError) {
            runValidationTasks("dementiaLikelihood", value);
          }
          setDementiaLikelihood(value);
        }}
        onBlur={() =>
          runValidationTasks("dementiaLikelihood", dementiaLikelihood)
        }
        errorMessage={errors.dementiaLikelihood?.errorMessage}
        hasError={errors.dementiaLikelihood?.hasError}
        {...getOverrideProps(overrides, "dementiaLikelihood")}
      ></TextField>
      <TextField
        label="Notes"
        isRequired={false}
        isReadOnly={false}
        value={notes}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              PK,
              SK,
              companyName,
              companyEmail,
              companyNumber,
              firstName,
              lastName,
              email,
              phoneNumber,
              specialty,
              securityLevel,
              clinicName,
              dateOfBirth,
              gender,
              preferredContact,
              dementiaLikelihood,
              notes: value,
              tests,
            };
            const result = onChange(modelFields);
            value = result?.notes ?? value;
          }
          if (errors.notes?.hasError) {
            runValidationTasks("notes", value);
          }
          setNotes(value);
        }}
        onBlur={() => runValidationTasks("notes", notes)}
        errorMessage={errors.notes?.errorMessage}
        hasError={errors.notes?.hasError}
        {...getOverrideProps(overrides, "notes")}
      ></TextField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              PK,
              SK,
              companyName,
              companyEmail,
              companyNumber,
              firstName,
              lastName,
              email,
              phoneNumber,
              specialty,
              securityLevel,
              clinicName,
              dateOfBirth,
              gender,
              preferredContact,
              dementiaLikelihood,
              notes,
              tests: values,
            };
            const result = onChange(modelFields);
            values = result?.tests ?? values;
          }
          setTests(values);
          setCurrentTestsValue("");
        }}
        currentFieldValue={currentTestsValue}
        label={"Tests"}
        items={tests}
        hasError={errors.tests?.hasError}
        setFieldValue={setCurrentTestsValue}
        inputFieldRef={testsRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Tests"
          isRequired={false}
          isReadOnly={false}
          value={currentTestsValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.tests?.hasError) {
              runValidationTasks("tests", value);
            }
            setCurrentTestsValue(value);
          }}
          onBlur={() => runValidationTasks("tests", currentTestsValue)}
          errorMessage={errors.tests?.errorMessage}
          hasError={errors.tests?.hasError}
          ref={testsRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "tests")}
        ></TextField>
      </ArrayField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || users)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || users) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}

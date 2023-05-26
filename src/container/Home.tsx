import CustomInput from '@/components/CustomInput';
import { fields } from '@/constants';

const ProfileSetting = () => {

  return (
    <>
      <form
        action="#"
        method="POST"
        className="mx-auto mt-16 max-w-xl sm:mt-10 px-4"
      >
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 grid-cols-2">
          {fields.map((field) => {
            return (
              <div key={`input-key-${field.id}`}>
                <CustomInput
                  id={field.id}
                  label={field.label}
                  name={field.name}
                  placeholder={field.placeholder}
                  type={field.type}
                  options={field.options}
                />
              </div>
            );
          })}
        </div>
      </form>
    </>
  );
};

export default ProfileSetting;

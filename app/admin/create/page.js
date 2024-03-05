import CreateForm from "@/app/components/admin/CreateForm";

const CreatePage = async () => {
  return (
    <div className="bg-gray-800 min-h-screen flex items-center justify-center">
      <div className="bg-gray-900 p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-3xl font-semibold mb-6 text-center text-gray-100">
          Crear Nuevo Producto
        </h1>
        <CreateForm />
      </div>
    </div>
  );
};

export default CreatePage;

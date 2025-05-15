import { DataProvider } from "react-admin";

const API_URL = "https://62f2643018493ca21f32b9f5.mockapi.io";

const dataProvider: DataProvider = {
  getList: async (resource, params) => {
    const response = await fetch(`${API_URL}/${resource}`);
    const data = await response.json();

    const { page = 1, perPage = 10 } = params.pagination || {};
    const { field = 'id', order = 'ASC' } = params.sort || {};


    const sortedData = [...data].sort((a, b) => {
      const aValue = field === 'id' ? Number(a[field]) : a[field];
      const bValue = field === 'id' ? Number(b[field]) : b[field];

      if (aValue < bValue) return order === 'ASC' ? 1 : -1;
      if (aValue > bValue) return order === 'ASC' ? -1 : 1;
      return 0;
    });

    const start = (page - 1) * perPage;
    const end = start + perPage;
    const paginatedData = sortedData.slice(start, end);

    return {
      data: paginatedData.map((item: any) => ({ ...item, id: item.id })),
      total: data.length,
    };
  },

  getOne: async (resource, params) => {
    const response = await fetch(`${API_URL}/${resource}/${params.id}`);
    const data = await response.json();
    return { data };
  },

  create: async (resource, params) => {
    const response = await fetch(`${API_URL}/${resource}`, {
      method: "POST",
      body: JSON.stringify(params.data),
      headers: { "Content-Type": "application/json" },
    });
    const data = await response.json();
    return { data };
  },

  update: async (resource, params) => {
    const response = await fetch(`${API_URL}/${resource}/${params.id}`, {
      method: "PUT",
      body: JSON.stringify(params.data),
      headers: { "Content-Type": "application/json" },
    });
    const data = await response.json();
    return { data };
  },

  delete: async (resource, params) => {
    const response = await fetch(`${API_URL}/${resource}/${params.id}`, {
      method: "DELETE",
    });
    const data = await response.json();
    return { data };
  },

  getMany: async (resource, params) => {
    const response = await Promise.all(
      params.ids.map((id) =>
        fetch(`${API_URL}/${resource}/${id}`).then((res) => res.json())
      )
    );
    return { data: response };
  },




  getManyReference: async () => ({ data: [], total: 0 }),
  updateMany: async () => ({ data: [] }),
  deleteMany: async () => ({ data: [] }),
};

export default dataProvider;

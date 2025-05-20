// src/dataProvider.ts
import { DataProvider } from "react-admin";

const API_URL = "https://62f2643018493ca21f32b9f5.mockapi.io";

let videos = [
  { id: 1, title: "Video A", src: "/videos/video2.mp4", thumbnail: "/thumbnails/amen.jpg" },
  { id: 2, title: "Video B", src: "/videos/video3.mp4", thumbnail: "/thumbnails/amen.jpg" },
];
let nextVideoId = 3;

const handleVideo = {
  getList: async () => ({
    data: [...videos],
    total: videos.length,
  }),

  getOne: async ({ id }: any) => {
    const record = videos.find((v) => v.id === id);
    if (!record) throw new Error("Video not found");
    return { data: record };
  },

  create: async ({ data }: any) => {
    const newVideo = { id: nextVideoId++, ...data };
    videos.push(newVideo);
    return { data: newVideo };
  },

  update: async ({ id, data }: any) => {
    videos = videos.map((v) => (v.id === id ? { ...v, ...data } : v));
    return { data };
  },

  delete: async ({ id }: any) => {
    videos = videos.filter((v) => v.id !== id);
    return { data: { id } };
  },
};


const dataProvider: DataProvider = {
  getList: async (resource, params) => {
    if (resource === "videos") return handleVideo.getList();
    const response = await fetch(`${API_URL}/${resource}`);
    const data = await response.json();

    const { page = 1, perPage = 10 } = params.pagination || {};
    const { field = "id", order = "ASC" } = params.sort || {};

    const sortedData = [...data].sort((a, b) => {
      const aValue = field === "id" ? Number(a[field]) : a[field];
      const bValue = field === "id" ? Number(b[field]) : b[field];
      if (aValue < bValue) return order === "DESC" ? -1 : 1;
      if (aValue > bValue) return order === "DESC" ? 1 : -1;
      return 0;
    });

    const start = (page - 1) * perPage;
    const paginatedData = sortedData.slice(start, start + perPage);
    return {
      data: paginatedData.map((item: any) => ({ ...item, id: item.id })),
      total: data.length,
    };
  },

  getOne: async (resource, params) => {
    if (resource === "videos") return handleVideo.getOne(params);
    const response = await fetch(`${API_URL}/${resource}/${params.id}`);
    const data = await response.json();
    return { data };
  },

  create: async (resource, params) => {
    if (resource === "videos") return handleVideo.create(params);
    const response = await fetch(`${API_URL}/${resource}`, {
      method: "POST",
      body: JSON.stringify(params.data),
      headers: { "Content-Type": "application/json" },
    });
    const data = await response.json();
    return { data };
  },

  update: async (resource, params) => {
    if (resource === "videos") return handleVideo.update(params);
    const response = await fetch(`${API_URL}/${resource}/${params.id}`, {
      method: "PUT",
      body: JSON.stringify(params.data),
      headers: { "Content-Type": "application/json" },
    });
    const data = await response.json();
    return { data };
  },

  delete: async (resource, params) => {
    if (resource === "videos") return handleVideo.delete(params);
    const response = await fetch(`${API_URL}/${resource}/${params.id}`, {
      method: "DELETE",
    });
    const data = await response.json();
    return { data };
  },

  getMany: async (resource, params) => {
    if (resource === "videos") {
      const data = videos.filter((v) => params.ids.includes(v.id));
      return { data };
    }
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

import { QueryClient, useMutation } from "@tanstack/react-query";
import { updateSetting as updatingSettingApi } from "../../services/apiCabins";
import toast from "react-hot-toast";

export function useEditCabin() {
  const { mutate: updateSetting, isLoading: isUpdating } = useMutation({
    mutationFn: ({ settingData }) => updatingSettingApi(settingData),
    onSuccess: () => {
      toast.success("Setting is successfully edited ");
      QueryClient.invalidateQueries({ queryKey: ["settings"] });
    },
    onError: (err) => toast.error(err.message),
  });
  return { isUpdating, updateSetting };
}

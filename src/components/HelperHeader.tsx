import { useDispatch, useSelector } from "react-redux";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

import {
    CompilerSliceStateType,
    updateCurrentLanguage,
} from "@/redux/slices/compilerSlice";
import { RootState } from "@/redux/store";

const HelperHeader = () => {
    const dispatch = useDispatch();
    const currentLanguage = useSelector(
        (state: RootState) => state.compilerSlice.currentLanguage
    );

    return (
        <div className="bg-black text-white p-2 flex justify-between items-center h-12">
            <div>
                <Select
                    onValueChange={(value) =>
                        dispatch(
                            updateCurrentLanguage(
                                value as CompilerSliceStateType["currentLanguage"]
                            )
                        )
                    }
                    defaultValue={currentLanguage}
                >
                    <SelectTrigger className="w-[120px] focus:ring-0">
                        <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="html">HTML</SelectItem>
                        <SelectItem value="css">CSS</SelectItem>
                        <SelectItem value="javascript">JavaScript</SelectItem>
                    </SelectContent>
                </Select>
            </div>
        </div>
    );
};

export default HelperHeader;

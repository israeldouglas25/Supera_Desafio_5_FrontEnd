import { format, parseISO } from "date-fns";
import { ptBR } from "date-fns/locale";

const formatDate = (date) => {
    return format(parseISO(date), "dd/MM/yyyy", {
        locale: ptBR
    })
}

export default formatDate;
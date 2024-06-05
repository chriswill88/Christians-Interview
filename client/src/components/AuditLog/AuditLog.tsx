import { calculateTime } from "../../helper/helper";

const AuditLog = ({selectedNote}) => {
    if (!selectedNote) {
        return <p>
            Click on tiles to see audit logs
        </p>
    }
    
    if (!selectedNote?.auditLog || selectedNote?.auditLog?.length <= 1) {
        return <p>
            No log for this note
        </p>
    }

    return <div>
        <h3>Audit Logs</h3>
        {selectedNote?.auditLog?.slice(0, selectedNote?.auditLog?.length - 1)?.map((log, ind) => <div key={ind}>
            - {log.note} - created {calculateTime(log?.timestamp)}
        </div>)}
    </div>
}

export default AuditLog;
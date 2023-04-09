function UserMessages({userMessage}){

    return (
        <div className="alert alert-warning  d-flex align-items-center" role="alert">
            <div>
                {userMessage}
            </div>
        </div>

    );

}

export default UserMessages;

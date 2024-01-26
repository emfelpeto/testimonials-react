function Testimonial({props}) {
    const imageName = props.name.replace(/\s+/g, '-').toLowerCase();
    return (
        <div className="card mb-5 w-100 text-light" style={{backgroundColor:'#0a0a23'}}>
            <div className="row g-0">
                <div className="col-md-4 col-sm-5">
                    <img src={require(`../images/${imageName}.png`)} className="img-fluid rounded-start" alt="Sara" />
                </div>
                <div className="col-md-8 col-sm-7">
                    <div className="card-body p-5 d-flex justify-content-center flex-column h-100">
                        <h4 className="card-title"><span className="fw-semibold">{props.name}</span> in {props.country}</h4>
                        <h4 className="card-title mb-4">{props.position} at <span className="fw-semibold">{props.company}</span></h4>
                        <p className="card-text fs-5 fst-italic text-info">
                            "{props.testimonial}"
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonial